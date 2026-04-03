import { NextResponse,NextRequest } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// GET /api/rates
export async function GET() {
  try {
    // Call your backend API
    const res = await fetch(`${API_URL}/api/rates`, {
      method: "GET",
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data = await res.json();
    // Forward backend response
    return NextResponse.json(data);
  } catch (err) {
    console.error("GET /api/rates error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
     const authHeader = req.headers.get("authorization");

    const backendRes = await fetch(`http://localhost:8080/api/rates`, {
      method: "PUT",
       headers: {
        "Content-Type": "application/json",
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
    
      body: JSON.stringify(body),
    });

    if (!backendRes.ok) {
      const errorText = await backendRes.text();
      return NextResponse.json({ error: errorText }, { status: backendRes.status });
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("PUT /api/rates error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
// export async function PUT(req: Request) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     const body = await req.json();
//     const res = await fetch(`${API_URL}/api/rates`, {
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