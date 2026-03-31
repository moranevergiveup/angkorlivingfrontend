import { NextResponse } from "next/server";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${API_URL}/api/floors/${params.id}`, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch floor" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; 
    const body = await req.json();
    const authHeader = req.headers.get("authorization");

    const res = await fetch(`${API_URL}/api/floors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend error:", errorText);
      return NextResponse.json({ error: errorText }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("PUT /floors error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${API_URL}/api/floors/${params.id}`, { method: "DELETE" });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to delete floor" }, { status: res.status });
    }
    return NextResponse.json({ message: "Floor deleted successfully" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
