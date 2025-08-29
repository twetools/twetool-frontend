/**
 * Cleanup Testing Files Script
 *
 * Removes redundant troubleshooting files while preserving useful utilities.
 * Files created during database connection debugging that are no longer needed.
 */

const fs = require("fs");
const path = require("path");

// Files to KEEP (useful for future development/debugging)
const keepFiles = [
  "create-test-contacts.js",
  "debug-db.js",
  "quick-db-check.js",
  "seed-contacts-typeorm.js",
  "simple-seed.js",
  "db-connection-test.js",
  "typeorm-contact-test.js",
  "verify-correct-password.js",
  "cleanup-testing-files.js", // This script itself
  "insert-test-contacts.sql", // SQL file
];

// Files to DELETE (redundant/one-time use)
const deleteFiles = [
  "complete-auth-fix.js",
  "complete-dollar-fix.js",
  "complete-fix-verification.js",
  "diagnose-sql-server.js",
  "final-db-verification.js",
  "final-environment-fix.js",
  "force-environment-reload.js",
  "initialize-database.js",
  "sql-server-diagnostic.js",
  "test-app-config.js",
  "test-basic-connection.js",
  "test-db-access.js",
  "test-db-connection.js",
  "test-default-instance.js",
  "test-direct-localdb.js",
  "test-dollar-escape.js",
  "test-environment-cleanup.js",
  "test-final-connection.js",
  "test-fixes-summary.js",
  "test-localdb-connection.js",
  "test-localdb-pipe.js",
  "test-mssql-library.js",
  "test-named-instance.js",
  "test-nextjs-simulation.js",
  "test-nextjs-typeorm.js",
  "test-password-fix.js",
  "test-password-length.js",
  "test-server-action-context.js",
  "test-server-action.js",
  "test-simple-connection.js",
  "test-simple-localdb.js",
  "test-sqlserver2022.js",
  "test-typeorm-config.js",
  "test-typeorm-connection.js",
  "test-typeorm-final.js",
  "test-typeorm-localdb.js",
  "test-typeorm-named-instance.js",
  "test-typeorm-simple.mjs",
  "test-updated-config.js",
  "test-validation-simple.js",
  "test-validation-ts.mjs",
  "test-validation.js",
  "test-windows-auth.js",
  "try-multiple-connections.js",
  "verify-lead-stages.js",
];

async function cleanupFiles() {
  console.log("🧹 Cleaning up redundant testing files...");
  console.log(`📋 Files to keep: ${keepFiles.length}`);
  console.log(`🗑️  Files to delete: ${deleteFiles.length}`);

  let deletedCount = 0;
  let errorCount = 0;

  for (const fileName of deleteFiles) {
    try {
      const filePath = path.join(__dirname, fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`✅ Deleted: ${fileName}`);
        deletedCount++;
      } else {
        console.log(`⚠️  File not found: ${fileName}`);
      }
    } catch (error) {
      console.error(`❌ Error deleting ${fileName}:`, error.message);
      errorCount++;
    }
  }

  console.log("\n📊 Cleanup Summary:");
  console.log(`✅ Files deleted: ${deletedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Files remaining: ${keepFiles.length}`);

  if (deletedCount > 0) {
    console.log("\n🎯 Next steps:");
    console.log("1. Review remaining files to ensure they meet your needs");
    console.log(
      '2. Run: git add . && git commit -m "Clean up redundant testing files"'
    );
  }
}

// Run cleanup if called directly
if (require.main === module) {
  cleanupFiles().catch(console.error);
}

module.exports = { cleanupFiles, keepFiles, deleteFiles };
