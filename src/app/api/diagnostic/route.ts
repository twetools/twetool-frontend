import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("🔄 Environment Variables Diagnostic");

  // Check environment variables
  const envVars = {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD
      ? `***${process.env.DB_PASSWORD.slice(-3)}`
      : "MISSING",
    DB_DATABASE: process.env.DB_DATABASE,
  };

  console.log("📊 Environment Variables:", envVars);

  // Check if critical variables are missing
  const missingVars = [];
  if (!process.env.DB_HOST) missingVars.push("DB_HOST");
  if (!process.env.DB_PASSWORD) missingVars.push("DB_PASSWORD");
  if (!process.env.DB_USERNAME) missingVars.push("DB_USERNAME");
  if (!process.env.DB_DATABASE) missingVars.push("DB_DATABASE");

  if (missingVars.length > 0) {
    console.error("❌ Missing environment variables:", missingVars);
    return NextResponse.json(
      {
        success: false,
        message: "Missing required environment variables",
        missingVars,
        envVars,
      },
      { status: 500 }
    );
  }

  // Test basic TypeORM import
  // TypeORM test logic removed
}
