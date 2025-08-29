// Simple SQL Server connection test and data insert
require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env" });

const sql = require("mssql");

async function insertTestContacts() {
  console.log("🔗 Connecting to SQL Server...");
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`Database: ${process.env.DB_DATABASE}`);

  const config = {
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  };

  try {
    await sql.connect(config);
    console.log("✅ Connected to SQL Server");

    // Check current contact count
    const countResult = await sql.query`SELECT COUNT(*) as count FROM contact`;
    console.log(`📊 Current contact count: ${countResult.recordset[0].count}`);

    // Insert test contacts if none exist
    if (countResult.recordset[0].count === 0) {
      console.log("🌱 No contacts found, inserting test data...");

      // Insert first test contact
      await sql.query`
                INSERT INTO contact (first_name, last_name, email, mobile_phone, created_at, updated_at)
                VALUES ('Test', 'User', 'test.user@example.com', '555-0123', GETDATE(), GETDATE())
            `;

      // Insert second test contact
      await sql.query`
                INSERT INTO contact (first_name, middle_name, last_name, email, mobile_phone, home_phone, notes, created_at, updated_at)
                VALUES ('Jane', 'M', 'Smith', 'jane.smith@example.com', '555-0124', '555-0125', 'Sample contact for testing pipeline display', GETDATE(), GETDATE())
            `;

      console.log("✅ Test contacts inserted");
    } else {
      console.log("ℹ️ Contacts already exist, skipping insert");
    }

    // Verify final count and show sample data
    const finalCount = await sql.query`SELECT COUNT(*) as count FROM contact`;
    console.log(`📊 Final contact count: ${finalCount.recordset[0].count}`);

    const sampleContacts = await sql.query`
            SELECT TOP 5 id, first_name, middle_name, last_name, email, mobile_phone, created_at
            FROM contact 
            ORDER BY id DESC
        `;

    console.log("📋 Sample contacts:");
    sampleContacts.recordset.forEach((contact) => {
      console.log(
        `  • ID: ${contact.id} - ${contact.first_name} ${
          contact.middle_name || ""
        } ${contact.last_name} (${contact.email})`
      );
    });

    await sql.close();
    console.log("🎉 Database operations completed successfully!");
    console.log("💡 Refresh your pipeline page to see the test contacts");
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.originalError) {
      console.error("Original Error:", error.originalError.message);
    }
  }
}

insertTestContacts();
