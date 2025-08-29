require("dotenv").config();
const { execSync } = require("child_process");
const fs = require("fs");

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("❌ DATABASE_URL not found");

const match = dbUrl.match(/^mysql:\/\/(.*?):(.*?)@(.*?):(\d+)\/(.*?)$/);
if (!match) throw new Error("❌ DATABASE_URL format invalid");

const [, rawUser, rawPass, host, port, db] = match;

// ✅ Decode credentials
const user = decodeURIComponent(rawUser);
const password = decodeURIComponent(rawPass);

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const filename = `prisma/backups/db.backup.${timestamp}.sql`;

fs.mkdirSync("prisma/backups", { recursive: true });

const command = `mysqldump -h ${host} -P ${port} -u ${user} -p${password} ${db} > ${filename}`;
console.log(`📦 Backing up database to: ${filename}`);
execSync(command, { stdio: "inherit" });
