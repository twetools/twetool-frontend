import { NextResponse } from "next/server";

export async function GET() {
  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD
      ? `***${process.env.DB_PASSWORD.slice(-3)}`
      : "MISSING",
    DB_DATABASE: process.env.DB_DATABASE,
  };

  console.log("🔍 Next.js Environment Check:", envCheck);

  return NextResponse.json({
    success: true,
    environment: envCheck,
    message: "Environment variables loaded in Next.js",
  });
}
