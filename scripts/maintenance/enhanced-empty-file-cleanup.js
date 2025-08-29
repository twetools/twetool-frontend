/**
 * Enhanced Empty File Cleanup with Prevention
 *
 * Specifically targets the testing directory issue where VS Code creates empty files
 * when reopening the workspace, likely due to deleted git history or extension behavior.
 *
 * Following tweAgent Generic Problem Solver standards.
 */

const fs = require("fs");
const path = require("path");

// Configuration
const DRY_RUN = false; // Set to true to preview without deleting
const VERBOSE = true;

// Critical directories to monitor for empty file creation
const CRITICAL_DIRECTORIES = [
  "scripts/testing",
  "scripts/maintenance",
  "src/components",
  "src/app/(examples)",
];

// Files that should NEVER be empty (preserve these even if 0 bytes)
const PROTECTED_FILES = [
  ".gitkeep",
  ".gitignore",
  "README.md",
  "package.json",
  "tsconfig.json",
];

// Get project root
const projectRoot = path.resolve(__dirname, "../../");

console.log("🧹 Enhanced Empty File Cleanup");
console.log("========================================");
console.log(`📁 Project Root: ${projectRoot}`);
console.log(`🧪 Dry Run: ${DRY_RUN ? "Enabled" : "Disabled"}`);
console.log(`🔍 Verbose: ${VERBOSE ? "Enabled" : "Disabled"}`);
console.log("========================================");

/**
 * Check if a file should be protected from deletion
 */
function isProtectedFile(filePath) {
  const fileName = path.basename(filePath);
  return PROTECTED_FILES.some(
    (protected) => fileName === protected || fileName.endsWith(protected)
  );
}

/**
 * Enhanced empty file detection and removal
 */
function cleanEmptyFiles(dirPath, relativePath = "") {
  let emptyFilesFound = 0;
  let emptyFilesDeleted = 0;
  let protectedFiles = 0;

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativeFilePath = path.join(relativePath, entry.name);

      // Skip excluded directories
      if (entry.isDirectory()) {
        const shouldSkip = [
          "node_modules",
          ".next",
          ".git",
          ".cache",
          "dist",
          "build",
          ".vscode",
          ".vs",
        ].some((excluded) => entry.name === excluded);

        if (!shouldSkip) {
          const result = cleanEmptyFiles(fullPath, relativeFilePath);
          emptyFilesFound += result.found;
          emptyFilesDeleted += result.deleted;
          protectedFiles += result.protected;
        }
        continue;
      }

      // Check if file is empty
      const stats = fs.statSync(fullPath);
      if (stats.size === 0) {
        emptyFilesFound++;

        if (isProtectedFile(fullPath)) {
          protectedFiles++;
          if (VERBOSE) {
            console.log(`🛡️  Protected: ${relativeFilePath}`);
          }
          continue;
        }

        if (DRY_RUN) {
          console.log(`👀 Would delete: ${relativeFilePath}`);
        } else {
          try {
            fs.unlinkSync(fullPath);
            emptyFilesDeleted++;
            console.log(`🗑️  Deleted: ${relativeFilePath}`);
          } catch (err) {
            console.error(
              `❌ Failed to delete ${relativeFilePath}: ${err.message}`
            );
          }
        }
      }
    }
  } catch (err) {
    console.error(`❌ Error scanning ${relativePath}: ${err.message}`);
  }

  return {
    found: emptyFilesFound,
    deleted: emptyFilesDeleted,
    protected: protectedFiles,
  };
}

/**
 * Check critical directories for suspicious empty file patterns
 */
function checkCriticalDirectories() {
  console.log("\n🎯 Checking Critical Directories");
  console.log("==================================");

  for (const criticalDir of CRITICAL_DIRECTORIES) {
    const fullPath = path.join(projectRoot, criticalDir);

    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directory not found: ${criticalDir}`);
      continue;
    }

    const result = cleanEmptyFiles(fullPath, criticalDir);

    console.log(`📁 ${criticalDir}:`);
    console.log(`   Empty files found: ${result.found}`);
    console.log(`   Files deleted: ${result.deleted}`);
    console.log(`   Protected files: ${result.protected}`);

    if (result.found > 5) {
      console.log(`🚨 WARNING: High number of empty files in ${criticalDir}!`);
      console.log(`   This might indicate VS Code or extension issues.`);
    }
  }
}

/**
 * Add prevention measures
 */
function addPreventionMeasures() {
  console.log("\n🛡️  Adding Prevention Measures");
  console.log("===============================");

  // Create a git hook to prevent committing empty files
  const gitHooksDir = path.join(projectRoot, ".git/hooks");
  const preCommitHook = path.join(gitHooksDir, "pre-commit");

  if (fs.existsSync(gitHooksDir) && !fs.existsSync(preCommitHook)) {
    const hookContent = `#!/bin/sh
# Prevent committing empty files
empty_files=$(git diff --cached --name-only | xargs -I {} sh -c 'test -f "{}" && test ! -s "{}" && echo "{}"')
if [ ! -z "$empty_files" ]; then
  echo "❌ Preventing commit: Empty files detected:"
  echo "$empty_files"
  echo "Run: node scripts/maintenance/removeEmptyFiles.js"
  exit 1
fi
`;

    if (!DRY_RUN) {
      fs.writeFileSync(preCommitHook, hookContent, { mode: 0o755 });
      console.log(
        "✅ Created git pre-commit hook to prevent empty file commits"
      );
    } else {
      console.log("👀 Would create git pre-commit hook");
    }
  }

  // Add to VS Code settings to reduce file creation
  const vscodeSettings = path.join(projectRoot, ".vscode/settings.json");
  if (fs.existsSync(path.dirname(vscodeSettings))) {
    let settings = {};
    if (fs.existsSync(vscodeSettings)) {
      settings = JSON.parse(fs.readFileSync(vscodeSettings, "utf8"));
    }

    settings["files.watcherExclude"] = {
      ...settings["files.watcherExclude"],
      "**/scripts/testing/**": true,
    };

    if (!DRY_RUN) {
      fs.writeFileSync(vscodeSettings, JSON.stringify(settings, null, 2));
      console.log(
        "✅ Updated VS Code settings to exclude testing directory from watchers"
      );
    } else {
      console.log("👀 Would update VS Code settings");
    }
  }
}

// Main execution
async function main() {
  try {
    // Check critical directories first
    checkCriticalDirectories();

    // Run full cleanup
    console.log("\n🌍 Full Project Cleanup");
    console.log("=======================");
    const result = cleanEmptyFiles(projectRoot);

    console.log("\n📊 Summary");
    console.log("===========");
    console.log(`Empty files found: ${result.found}`);
    console.log(`Files deleted: ${result.deleted}`);
    console.log(`Protected files: ${result.protected}`);

    // Add prevention measures
    addPreventionMeasures();

    // Success message
    console.log("\n✅ Cleanup Complete");

    if (result.found > 0) {
      console.log("\n🎯 Next Steps:");
      console.log('1. Run: git add . && git commit -m "Remove empty files"');
      console.log("2. Monitor for empty files reappearing on VS Code restart");
      console.log("3. If issue persists, check VS Code extensions");
    }
  } catch (error) {
    console.error("❌ Fatal error:", error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  cleanEmptyFiles,
  checkCriticalDirectories,
  addPreventionMeasures,
};
