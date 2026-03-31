
import { NextResponse } from "next/server";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
  
    const { id } = await context.params;
    const authHeader = req.headers.get("authorization");

    const backendRes = await fetch(`${BASE_URL}/api/users/${id}/reset-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
    });

    if (!backendRes.ok) {
      const errorText = await backendRes.text();
      console.error("Backend error:", errorText);
      return NextResponse.json({ error: errorText }, { status: backendRes.status });
    }

    // backend returns plain text message
    const message = await backendRes.text();
    return NextResponse.json({ message });
  } catch (err) {
    console.error("PUT /users/reset-password error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
