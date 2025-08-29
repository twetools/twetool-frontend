const sql = require("mssql");

async function quickCheck() {
  try {
    console.log("🔌 Connecting to SQL Server...");
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

    console.log("✅ Connected successfully!");

    // Check database name we're connected to
    const dbName = await pool.request().query("SELECT DB_NAME() as current_db");
    console.log("📊 Current database:", dbName.recordset[0].current_db);

    // Check tables that exist
    const tables = await pool.request().query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_TYPE = 'BASE TABLE' 
      AND TABLE_NAME LIKE '%contact%'
      ORDER BY TABLE_NAME
    `);
    console.log(
      "🗂️ Contact-related tables:",
      tables.recordset.map((t) => t.TABLE_NAME)
    );

    // Try different case variations
    const variations = ["contact", "Contact", "CONTACT"];

    for (const tableName of variations) {
      try {
        console.log(`\n🔍 Trying table: "${tableName}"`);
        const count = await pool
          .request()
          .query(`SELECT COUNT(*) as total FROM [${tableName}]`);
        console.log(`   ✅ ${tableName}: ${count.recordset[0].total} records`);

        if (count.recordset[0].total > 0) {
          const sample = await pool
            .request()
            .query(`SELECT TOP 3 * FROM [${tableName}] ORDER BY id DESC`);
          console.log(`   📋 Sample records:`, sample.recordset);
        }
      } catch (err) {
        console.log(`   ❌ ${tableName}: ${err.message}`);
      }
    }

    await pool.close();
  } catch (error) {
    console.error("❌ Connection error:", error.message);
  }
}

quickCheck();
