
import { NextResponse } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/floors`, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch floors" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  }catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
// export async function POST(req: Request) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     const body = await req.json();
//     const res = await fetch(`${API_URL}/api/floors`, {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json",
//       ...(authHeader ? { Authorization: authHeader } : {}),
//     },
//       body: JSON.stringify(body),
//     });

//     if (!res.ok) {
//       return NextResponse.json({ error: "Failed to create floor" }, { status: res.status });
//     }

//     const data = await res.json();
//     return NextResponse.json(data, { status: 201 });
//   } catch {
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const formData = await req.formData(); // ✅ handle file + fields

    const res = await fetch(`${API_URL}/api/rooms`, {
      method: "POST",
      headers: {
        ...(authHeader ? { Authorization: authHeader } : {}),
        // ❌ do not set Content-Type manually, fetch will handle multipart boundaries
      },
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json({ error: errorText }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

