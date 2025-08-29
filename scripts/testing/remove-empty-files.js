/**
 * Remove Empty Files Script
 *
 * Automatically detects and removes empty files in the testing directory.
 * Prevents VS Code or other processes from creating empty placeholder files.
 */

const fs = require("fs");
const path = require("path");

/**
 * Scans directory for empty files and removes them
 */
function removeEmptyFiles() {
  console.log("🔍 Scanning for empty files...");

  const testingDir = __dirname;
  let emptyFilesFound = 0;
  let filesRemoved = 0;

  try {
    const files = fs.readdirSync(testingDir);

    for (const file of files) {
      const filePath = path.join(testingDir, file);

      // Skip directories and this script itself
      if (
        fs.statSync(filePath).isDirectory() ||
        file === "remove-empty-files.js"
      ) {
        continue;
      }

      // Check if file is empty
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        emptyFilesFound++;
        console.log(`📄 Found empty file: ${file}`);

        try {
          fs.unlinkSync(filePath);
          console.log(`✅ Removed: ${file}`);
          filesRemoved++;
        } catch (error) {
          console.error(`❌ Error removing ${file}:`, error.message);
        }
      }
    }

    console.log("\n📊 Empty File Cleanup Summary:");
    console.log(`🔍 Empty files found: ${emptyFilesFound}`);
    console.log(`✅ Files removed: ${filesRemoved}`);

    if (emptyFilesFound === 0) {
      console.log("✨ No empty files found - directory is clean!");
    } else if (filesRemoved > 0) {
      console.log(
        '\n🎯 Consider running: git add . && git commit -m "Remove empty files"'
      );
    }
  } catch (error) {
    console.error("❌ Error scanning directory:", error.message);
  }
}

/**
 * Provides prevention recommendations
 */
function preventionRecommendations() {
  console.log("\n🛡️  Prevention Recommendations:");
  console.log("1. Check VS Code extensions that might create empty files");
  console.log(
    "2. Verify no git hooks or processes are creating placeholder files"
  );
  console.log("3. Check if any VS Code settings auto-create files");
  console.log("4. Run this script periodically to catch empty files early");
  console.log("5. Consider adding this script to a VS Code task or npm script");
}

// Run cleanup and show recommendations if called directly
if (require.main === module) {
  removeEmptyFiles();
  preventionRecommendations();
}

module.exports = { removeEmptyFiles };
