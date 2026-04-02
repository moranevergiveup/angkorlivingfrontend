import {NextRequest, NextResponse } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const roomId = params.id;
//     const data = await req.formData();

//     const status = data.get("status") as string | null;
//     const imageFile = data.get("imageFile") as File | null;

//     const backendForm = new FormData();
//     if (status) backendForm.append("status", status);

//     if (imageFile) {
//       // Convert File to Blob with filename
//       const arrayBuffer = await imageFile.arrayBuffer();
//       const blob = new Blob([arrayBuffer], { type: imageFile.type });
//       backendForm.append("imageFile", blob, imageFile.name);
//     }

//     const authHeader = req.headers.get("authorization") ?? "";

//     const backendRes = await fetch(`${API_URL}/api/rooms/${roomId}`, {
//       method: "PUT",
//       headers: {
//         ...(authHeader ? { Authorization: authHeader } : {}),
//       },
//       body: backendForm,
//     });

//     if (!backendRes.ok) {
//       const text = await backendRes.text();
//       return NextResponse.json({ error: text }, { status: backendRes.status });
//     }

//     const updatedRoom = await backendRes.json();
//     return NextResponse.json(updatedRoom);
//   } catch (err) {
//     console.error("PUT /api/rooms/[id] error:", err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }\
// import { NextResponse } from "next/server";

// export const PUT = async (req: Request, { params }: { params: { id: string } }) => {

//   try {
//     const roomId = params.id;
//     const formData = await req.formData();

//     const authHeader = req.headers.get("authorization");

//     // Convert files in FormData to proper Blob objects if needed
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

//     // Send request to backend
//     const backendRes = await fetch(`${process.env.API_URL}/api/rooms/${roomId}`, {
//       method: "PUT",
//       headers: {
//         ...(authHeader ? { Authorization: authHeader } : {}),
//       },
//       body: backendForm,
//     });

//     // Forward backend errors
//     if (!backendRes.ok) {
//       const errorText = await backendRes.text();
//       return NextResponse.json({ error: errorText }, { status: backendRes.status });
//     }

//     // Return backend response
//     const data = await backendRes.json();
//     return NextResponse.json(data);
//   } catch (err) {
//     console.error(`PUT /api/rooms/${params.id} error:`, err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// };
// import { NextResponse } from "next/server";

// export const PUT = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const roomId = params.id;
//     const authHeader = req.headers.get("authorization");

//     // Detect if request is JSON or FormData
//     const contentType = req.headers.get("content-type") || "";

//     let backendBody: BodyInit;
//     let backendHeaders: HeadersInit = {
//       ...(authHeader ? { Authorization: authHeader } : {}),
//     };

//     if (contentType.includes("application/json")) {
//       // Forward JSON directly
//       const json = await req.json();
//       backendBody = JSON.stringify(json);
//       backendHeaders["Content-Type"] = "application/json";
//     } else {
//       // Handle multipart/form-data
//       const formData = await req.formData();
//       const backendForm = new FormData();

//       for (const [key, value] of formData.entries()) {
//         if (value instanceof File) {
//           const arrayBuffer = await value.arrayBuffer();
//           const blob = new Blob([arrayBuffer], { type: value.type });
//           backendForm.append(key, blob, value.name);
//         } else {
//           backendForm.append(key, value as string);
//         }
//       }

//       backendBody = backendForm;
//       // Do NOT set Content-Type manually; fetch will handle it
//     }

//     const backendRes = await fetch(`${API_URL}/api/rooms/${roomId}`, {
//       method: "PUT", // ✅ safer for partial updates
//       headers: backendHeaders,
//       body: backendBody,
//     });

//     if (!backendRes.ok) {
//       const errorText = await backendRes.text();
//       return NextResponse.json({ error: errorText }, { status: backendRes.status });
//     }

//     const data = await backendRes.json();
//     return NextResponse.json(data);
//   } catch (err) {
//     console.error(`PUT /api/rooms/${params.id} error:`, err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// };

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const roomId = params.id;
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

    const backendRes = await fetch(`${process.env.API_URL}/api/rooms/${roomId}`, {
      method: "PUT", // ✅ partial update
      body: backendForm,
    });

    if (!backendRes.ok) {
      const errorText = await backendRes.text();
      return NextResponse.json({ error: errorText }, { status: backendRes.status });
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(`PUT /api/rooms/${params.id} error:`, err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
