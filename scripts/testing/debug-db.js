const sql = require("mssql");

async function checkDatabase() {
  try {
    // Connect to SQL Server
    const pool = await sql.connect({
      server: "PREDATOR\\TWEAGENT_DEV",
      database: "tweAgent",
      user: "sa",
      password: "password",
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    });

    // Check if contact table exists and has data
    const tableCheck = await pool.request().query(`
            SELECT TABLE_NAME 
            FROM INFORMATION_SCHEMA.TABLES 
            WHERE TABLE_TYPE = 'BASE TABLE'
            ORDER BY TABLE_NAME
        `);

    console.log(
      "📊 Tables in database:",
      tableCheck.recordset.map((t) => t.TABLE_NAME)
    );

    // Check contact table data
    const contactCount = await pool.request().query(`
            SELECT COUNT(*) as count FROM contact
        `);
    console.log("👥 Contact count:", contactCount.recordset[0].count);

    // Get sample contact data if any exists
    const sampleContacts = await pool.request().query(`
            SELECT TOP 5 id, first_name, last_name, email 
            FROM contact
            ORDER BY id DESC
        `);
    console.log("📋 Sample contacts:", sampleContacts.recordset);

    // Check other lookup tables
    const roleCount = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM contact_role`);
    console.log("🎭 Role count:", roleCount.recordset[0].count);

    const clientTypeCount = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM client_type`);
    console.log("🏢 Client type count:", clientTypeCount.recordset[0].count);

    await pool.close();
  } catch (error) {
    console.error("❌ Database check error:", error.message);
  }
}

checkDatabase();
