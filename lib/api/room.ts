// ✅ Get all rooms
import { apiFetch } from "../fetcher";
import { Room, RoomRequest } from "@/lib/types/room";
export async function getRooms() {
 return apiFetch("/api/rooms");
  // if (!res.ok) throw new Error(`API error: ${res.status}`);
  // return res.json();
}


export async function getRoomById(id: string) {
  return apiFetch(`/api/rooms/${id}`);
  
}


// export async function addRoom(
//   // roomNumber: string,
//   floorId: string,
//   status: string,
//   imageFile?: File
// ): Promise<Room> {
//   const formData = new FormData();
//   // formData.append("roomNumber", roomNumber);
//   formData.append("floorId", floorId);
//   formData.append("status", status);
//   if (imageFile) {
//     formData.append("imageFile", imageFile);
//   }

//   const res = await fetch("/api/rooms", {
//     method: "POST",
//     body: formData,
//   });

//   if (!res.ok) {
//     throw new Error("Failed to add room");
//   }

//   return res.json();
// }
// export async function addRoom(
//   floorId: string,
//   status: string,
//   imageFile?: File
// ): Promise<Room> {
//   const formData = new FormData();
//   formData.append("floorId", floorId);
//   formData.append("status", status);

//   if (imageFile) {
//     formData.append("imageFile", imageFile, imageFile.name);
//   }

//   const res = await fetch("/api/rooms", {
//     method: "POST",
//     body: formData,
//     // ✅ Forward auth if needed
//     headers: {
//       // Don’t set Content-Type manually, fetch will handle multipart boundaries
//       ...(typeof window !== "undefined" && localStorage.getItem("token")
//         ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         : {}),
//     },
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(`Failed to add room: ${errorText}`);
//   }

//   return res.json();
// }
const BASE_URL = "/api/rooms";
// export async function addRoom(room: RoomRequest): Promise<Room> {
//   const formData = new FormData();
//   formData.append("floorId", room.floorId.toString());
//   formData.append("status", room.status);

//   if (room.price !== undefined) {
//     formData.append("price", String(room.price));
//   }

//   if (room.imageFile) {
//     formData.append("imageFile", room.imageFile, room.imageFile.name);
//   }

//   return apiFetch("/api/rooms", {
//     method: "POST",
//     body: formData,
//     // ❌ don’t set Content-Type manually, browser will handle multipart
//   });
// }
export async function addRoom(room: RoomRequest): Promise<Room> {
  const formData = new FormData();
  formData.append("floorId", room.floorId.toString());
  formData.append("status", room.status);

  if (room.price !== undefined) {
    formData.append("price", String(room.price));
  }

  if (room.imageFile) {
    formData.append("imageFile", room.imageFile, room.imageFile.name);
  }

  return apiFetch("/api/rooms", {
    method: "POST",
    body: formData,
    // ❌ don’t set Content-Type manually, browser will handle multipart
  });
}