const fs = require("fs");
const path = require("path");

// 🛡️ Optional Enhancements
const EXCLUDED_PATHS = [
  "node_modules",
  ".next",
  ".git",
  ".cache",
  "dist",
  "build",
];

// ✅ Toggle this to true for preview-only mode
const DRY_RUN = false;

// 🧭 Get the absolute path to the project root
const projectRoot = path.resolve(__dirname, "../../");
console.log(`🔍 Scanning for empty files in: ${projectRoot}`);
console.log(`🧪 Dry run mode: ${DRY_RUN ? "Enabled" : "Disabled"}`);

// 🚀 Recursive scanner
function removeEmptyFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    // Skip excluded folders
    if (EXCLUDED_PATHS.some((excluded) => fullPath.includes(excluded))) {
      continue;
    }

    if (entry.isDirectory()) {
      removeEmptyFiles(fullPath); // Dive deeper
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size === 0) {
        if (DRY_RUN) {
          console.log(`👀 Would delete: ${fullPath}`);
        } else {
          try {
            fs.unlinkSync(fullPath);
            console.log(`🧹 Deleted: ${fullPath}`);
          } catch (err) {
            console.error(`❌ Failed to delete ${fullPath}: ${err.message}`);
          }
        }
      }
    }
  }
}

removeEmptyFiles(projectRoot);
console.log("✅ Cleanup complete.");
