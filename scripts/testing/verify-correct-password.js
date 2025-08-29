// Final verification with correct password
const { DataSource } = require("typeorm");
require("dotenv").config();

async function verifyConnection() {
  console.log("🔧 Final Database Connection Verification");
  console.log("=====================================");
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`Port: ${process.env.DB_PORT}`);
  console.log(`Username: ${process.env.DB_USERNAME}`);
  console.log(`Password: "${process.env.DB_PASSWORD}"`);
  console.log(`Database: ${process.env.DB_DATABASE}`);
  console.log("=====================================");

  const dataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST.split("\\")[0],
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    options: {
      encrypt: false,
      trustServerCertificate: true,
      instanceName: process.env.DB_HOST.includes("\\")
        ? process.env.DB_HOST.split("\\")[1]
        : undefined,
    },
    synchronize: false,
    logging: false,
  });

  try {
    console.log("🔌 Attempting connection...");
    await dataSource.initialize();
    console.log("✅ Connection successful!");

    // Test basic query
    console.log("\n📊 Testing database queries:");

    const contextResult = await dataSource.query(`
      SELECT 
        DB_NAME() as current_database,
        @@SERVERNAME as server_name,
        USER_NAME() as current_user
    `);
    console.log("Database context:", contextResult[0]);

    const contactCount = await dataSource.query(
      "SELECT COUNT(*) as count FROM dbo.contact"
    );
    console.log("Contact count:", contactCount[0]);

    if (contactCount[0].count > 0) {
      const sampleContacts = await dataSource.query(`
        SELECT TOP 3 id, first_name, last_name, email 
        FROM dbo.contact 
        ORDER BY id DESC
      `);
      console.log("Sample contacts:", sampleContacts);
    }

    await dataSource.destroy();
    console.log("✅ Verification completed successfully!");
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    console.error("Full error:", error);
  }
}

verifyConnection();
