import { NextResponse } from "next/server";

export async function GET() {
  const envDiagnostic = {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD_LENGTH: process.env.DB_PASSWORD?.length || 0,
    DB_PASSWORD_FIRST_3: process.env.DB_PASSWORD?.substring(0, 3) || "MISSING",
    DB_PASSWORD_LAST_3: process.env.DB_PASSWORD?.slice(-3) || "MISSING",
    DB_PASSWORD_FULL_DEBUG: process.env.DB_PASSWORD || "MISSING",
    DB_DATABASE: process.env.DB_DATABASE,

    // Check all environment sources
    ALL_DB_VARS: Object.keys(process.env)
      .filter((key) => key.startsWith("DB_"))
      .reduce((acc, key) => {
        const value = process.env[key];
        acc[key] =
          key === "DB_PASSWORD"
            ? `***${value?.slice(-3) || "MISSING"}`
            : value || "UNDEFINED";
        return acc;
      }, {} as Record<string, string>),
  };

  console.log("🔍 Next.js Environment Diagnostic:");
  console.log("   DB_PASSWORD length:", process.env.DB_PASSWORD?.length);
  console.log("   DB_PASSWORD value:", process.env.DB_PASSWORD);
  console.log("   All DB vars:", envDiagnostic.ALL_DB_VARS);

  return NextResponse.json({
    success: true,
    message: "Environment diagnostic complete",
    diagnostic: envDiagnostic,
  });
}
