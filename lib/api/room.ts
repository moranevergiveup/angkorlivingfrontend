// ✅ Get all rooms
import { apiFetch } from "../fetcher";
import { Room, RoomRequest,RoomRequestUpdate } from "@/lib/types/room";
export async function getRooms() {
 return apiFetch("/api/rooms");
}


export async function getRoomById(id: string) {
  return apiFetch(`/api/rooms/${id}`);
  
}

// const BASE_URL = "/api/rooms";
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
  
  });
}
// export async function updateRoom(room: RoomRequest & { id: number }): Promise<Room> {
//   const formData = new FormData();
//   formData.append("floorId", room.floorId.toString());
//   formData.append("status", room.status);

//   if (room.price !== undefined) {
//     formData.append("price", String(room.price));
//   }

//   if (room.imageFile) {
//     formData.append("imageFile", room.imageFile, room.imageFile.name);
//   }

//   return apiFetch(`/api/rooms/${room.id}`, {
//     method: "PUT", // or "PATCH" depending on your backend
//     body: formData,
//   });
// // }
// import { RoomRequest, Room } from "@/lib/types/room";
// import { apiFetch } from "@/lib/api";

// export async function updateRoom(
//   room: Partial<RoomRequest> & { id: number } // allow partial for update
// ): Promise<Room> {
//   const formData = new FormData();

//   // Only append if values exist
//   if (room.floorId !== undefined) formData.append("floorId", room.floorId.toString());
//   if (room.price !== undefined) formData.append("price", String(room.price));
//   if (room.status !== undefined) formData.append("status", room.status);
//   if (room.imageFile) formData.append("imageFile", room.imageFile, room.imageFile.name);

//   return apiFetch(`/api/rooms/${room.id}`, {
//     method: "PUT", // or PATCH if backend supports partial updates
//     body: formData,
//   });
// }
// export async function updateRoom(
//   room: Partial<RoomRequestUpdate> & { id: number }
// ): Promise<Room> {
//   const formData = new FormData();
//   // if (room.floorId !== undefined) formData.append("floorId", room.floorId.toString());
//   // if (room.price !== undefined) formData.append("price", String(room.price));
//   if (room.status !== undefined) formData.append("status", room.status);
//   if (room.imageFile) formData.append("imageFile", room.imageFile, room.imageFile.name);

//   return apiFetch(`/api/rooms/${room.id}`, {
//     method: "PUT", // switch to PATCH
//     body: formData,
//   });
// }

export async function updateRoom(
  room: Partial<RoomRequestUpdate> & { id: number }
): Promise<Room> {
  const formData = new FormData();

  // Only append fields you want to update
  if (room.status !== undefined) {
    formData.append("status", room.status);
  }
  if (room.imageFile) {
    formData.append("imageFile", room.imageFile, room.imageFile.name);
  }

  return apiFetch(`/api/rooms/${room.id}`, {
    method: "PATCH", // ✅ partial update
    body: formData,
  });
}
