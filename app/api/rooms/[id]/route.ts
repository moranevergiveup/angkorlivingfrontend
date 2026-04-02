import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ await params
    const formData = await req.formData();

    const backendForm = new FormData();
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const arrayBuffer = await value.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: value.type });
        backendForm.append(key, blob, value.name);
      } else {
        backendForm.append(key, value as string);
      }
    }

    const backendRes = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
      method: "PUT",
      body: backendForm,
    });

    if (!backendRes.ok) {
      const errorText = await backendRes.text();
      return NextResponse.json({ error: errorText }, { status: backendRes.status });
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err) {
    // console.error(`PUT /api/rooms/${await context.params.id} error:`, err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
