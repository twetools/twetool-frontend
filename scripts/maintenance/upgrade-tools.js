#!/usr/bin/env node
const { execSync } = require("child_process");

const commands = [
  "npm install -g npm@latest",
  "npm install eslint@latest eslint-config-next@latest typescript@latest next@latest prisma@latest @prisma/client@latest tailwindcss@latest @tailwindcss/forms@latest @tailwindcss/postcss@latest autoprefixer@latest --save-dev --save",
];

console.log("Upgrading key dev tools to their latest versions for tweAgent...");

for (const cmd of commands) {
  console.log(`\n> ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`Error running: ${cmd}`);
    process.exit(1);
  }
}

console.log("\nAll tools upgraded to latest versions.");
