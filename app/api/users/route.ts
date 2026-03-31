import { NextResponse } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  const res = await fetch(`${API_URL}/api/users/tenants`, {
    headers: {
      "Content-Type": "application/json",
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

