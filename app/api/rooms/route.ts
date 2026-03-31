import { NextResponse } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/rooms`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch rooms" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
     const authHeader = req.headers.get("authorization");

    const backendRes = await fetch(`${API_URL}/api/rooms`, {
      method: "POST",
      headers: {
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
      body: formData,
    });

    if (!backendRes.ok) {
      const errorText = await backendRes.text();
      return NextResponse.json({ error: errorText }, { status: backendRes.status });
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

