import { NextRequest, NextResponse } from "next/server";

const API_URL = "http://localhost:8080";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    const res = await fetch(`${API_URL}/api/users/profile`, {
      method: "GET",
      headers: {
        Authorization: authHeader || "",
      },
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}