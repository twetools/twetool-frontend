import { NextRequest, NextResponse } from "next/server";
import { mapKeysToCamelCase } from "@/lib/utils/caseConversion";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";


export async function DELETE(req: NextRequest, context: any) {
  // context.params is a Promise in this Next.js version, must be awaited
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: "Missing account ID" }, { status: 400 });
  }
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/accounts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!backendRes.ok) {
      const error = await backendRes.text();
      return NextResponse.json({ error }, { status: backendRes.status });
    }
    // If backend returns JSON, parse and map keys, else return status only
    let data = null;
    try {
      data = await backendRes.json();
      data = mapKeysToCamelCase(data);
    } catch {
      // No JSON body
    }
    return NextResponse.json(data ?? {}, { status: backendRes.status });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function GET(req: NextRequest, context: any) {
  const { id } = (await context).params;
  if (!id) {
    return NextResponse.json({ error: "Missing account ID" }, { status: 400 });
  }
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/accounts/${id}`);
    if (!backendRes.ok) {
      const error = await backendRes.text();
      return NextResponse.json({ error }, { status: backendRes.status });
    }
    const data = await backendRes.json();
    return NextResponse.json(mapKeysToCamelCase(data), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: any) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: "Missing account ID" }, { status: 400 });
  }
  try {
    const body = await req.json();
    const backendRes = await fetch(`${BACKEND_URL}/api/accounts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!backendRes.ok) {
      const error = await backendRes.text();
      return NextResponse.json({ error }, { status: backendRes.status });
    }
    const data = await backendRes.json();
    return NextResponse.json(mapKeysToCamelCase(data), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
