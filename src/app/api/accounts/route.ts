
import { NextRequest, NextResponse } from "next/server";
import { mapKeysToCamelCase } from "@/lib/utils/caseConversion";

// Proxy to backend API for accounts
export async function GET(req: NextRequest) {
  try {
    const backendRes = await fetch("http://localhost:5000/api/accounts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Forward cookies or auth headers if needed
    });
  const data = await backendRes.json();
  // Convert all keys to camelCase for frontend
  const camelData = mapKeysToCamelCase(data);
  return NextResponse.json(camelData, { status: backendRes.status });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch accounts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch("http://localhost:5000/api/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  // Convert all keys to camelCase for frontend
  const camelData = mapKeysToCamelCase(data);
  return NextResponse.json(camelData, { status: res.status });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  // Expecting body to contain an id field for the account to update
  const { id, ...updateData } = body;
  if (!id) {
    return NextResponse.json({ error: "Missing account id for update" }, { status: 400 });
  }
  const res = await fetch(`http://localhost:5000/api/accounts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  const data = await res.json();
  // Convert all keys to camelCase for frontend
  const camelData = mapKeysToCamelCase(data);
  return NextResponse.json(camelData, { status: res.status });
}
