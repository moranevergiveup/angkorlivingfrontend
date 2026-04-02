// import { NextRequest, NextResponse } from "next/server";

// export async function PUT(
//   req: NextRequest,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await context.params; // ✅ await params
//     const formData = await req.formData();

//     const backendForm = new FormData();
//     for (const [key, value] of formData.entries()) {
//       if (value instanceof File) {
//         const arrayBuffer = await value.arrayBuffer();
//         const blob = new Blob([arrayBuffer], { type: value.type });
//         backendForm.append(key, blob, value.name);
//       } else {
//         backendForm.append(key, value as string);
//       }
//     }

//     const backendRes = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
//       method: "PUT",
//       body: backendForm,
//     });

//     if (!backendRes.ok) {
//       const errorText = await backendRes.text();
//       return NextResponse.json({ error: errorText }, { status: backendRes.status });
//     }

//     const data = await backendRes.json();
//     return NextResponse.json(data);
//   } catch (err) {
//     // console.error(`PUT /api/rooms/${await context.params.id} error:`, err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
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

