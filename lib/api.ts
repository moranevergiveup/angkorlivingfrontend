// // // import { apiFetch } from "./fetcher";

// // /* AUTH */
// // export async function login(email: string, password: string) {
// //   const res = await fetch("/api/auth/login", {
// //     method: "POST",
// //     body: JSON.stringify({ email, password }),
// //   });
// //   // apiFetch already does res.json(), so res is the parsed JSON
// //   return res; // { token, role }
// // }
// // export async function register(username: string, email: string, password: string, role: string) {
// //   return fetch("/api/auth/register", {
// //     method: "POST",
// //     body: JSON.stringify({ username, email, password, role }),
// //   });
// // }

// // /* USERS */
// // export async function getUsers() { 
// //   return fetch("/api/users", {
// //     method: "GET",
// //   });
// // }

// // /* ROOMS */
// // export async function getRooms() { return fetch("/api/rooms", {
// //   method: "GET",
// // }); }

// // /* RENTALS */
// // export async function getRentals() { return fetch("/api/rentals", {
// //   method: "GET",
// // }); }

// // /* PAYMENTS */
// // export async function generatePayment(rentalId: number) {
// //   return fetch("/api/payments/generate", {
// //     method: "POST",
// //     body: JSON.stringify({ rentalId }),
// //   });
// // }

// // lib/api.js
// import { apiFetch } from "./fetcher";

// export async function login(email:string, password:string) {
//   return apiFetch("/api/auth/login", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//   });
// }

// export async function register(username:string, email:string, password:string, role:string) {
//   return apiFetch("/api/auth/register", {
//     method: "POST",
//     body: JSON.stringify({ username, email, password, role }),
//   });
// }
// export async function getUsers() {
//   return apiFetch("/api/users");
// }
// // ✅ Get all rooms
// export async function getRooms() {
//  return apiFetch("/api/rooms");
//   // if (!res.ok) throw new Error(`API error: ${res.status}`);
//   // return res.json();
// }

// // ✅ Get room by ID
// export async function getRoomById(id: string) {
//   return apiFetch(`/api/rooms/${id}`);
  
// }




// // ✅ Get all floors
// export async function getFloors() {
//   return await apiFetch("/api/floors");
//   // if (!res.ok) throw new Error("Failed to fetch floors");
//   // return res.json();
// }

// // // ✅ Get floor by ID
// // export async function getFloorById(id: string) {
// //   const res = await fetch(`/api/floors/${id}`);
// //   if (!res.ok) throw new Error("Failed to fetch floor");
// //   return res.json();
// // }

// // ✅ Create floor
// // export async function createFloor(floor: {
// //   name: string;
// //   description: string;
// //   price: number;
// // }) {
// //   const res = await fetch("/api/floors", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(floor),
// //   });
// //   if (!res.ok) throw new Error("Failed to create floor");
// //   return res.json();
// // }

// // // ✅ Update floor
// // export async function updateFloor(id: string, floor: {
// //   name: string;
// //   description: string;
// //   price: number;
// // }) {
// //   const res = await fetch(`/api/floors/${id}`, {
// //     method: "PUT",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(floor),
// //   });
// //   if (!res.ok) throw new Error("Failed to update floor");
// //   return res.json();
// // }

// // // ✅ Delete floor
// // export async function deleteFloor(id: string) {
// //   const res = await fetch(`/api/floors/${id}`, { method: "DELETE" });
// //   if (!res.ok) throw new Error("Failed to delete floor");
// //   return res.json();
// // }

// // ✅ Get all rentals
// export async function getRentals() {
//   return await apiFetch("/api/rentals");
// }

// // ✅ Get rental by ID
// export async function getRentalById(id: string) {
//   return await apiFetch(`/api/rentals/${id}`);
// }

// // // ✅ Create rental
// // export async function createRental(rental: {
// //   roomNumber: string;
// //   tenantEmail: string;
// //   startDate: string;
// //   endDate: string;
// //   status: string;
// //   monthlyRent: number;
// // }) {
// //   const res = await fetch("/api/rentals", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(rental),
// //   });
// //   if (!res.ok) throw new Error("Failed to create rental");
// //   return res.json();
// // }

// // ✅ Update rental
// // export async function updateRental(id: string, rental: {
// //   roomNumber: string;
// //   tenantEmail: string;
// //   startDate: string;
// //   endDate: string;
// //   status: string;
// //   monthlyRent: number;
// // }) {
// //   const res = await fetch(`/api/rentals/${id}`, {
// //     method: "PUT",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(rental),
// //   });
// //   if (!res.ok) throw new Error("Failed to update rental");
// //   return res.json();
// // }

// // ✅ Delete rental
// // export async function deleteRental(id: string) {
// //   const res = await fetch(`/api/rentals/${id}`, { method: "DELETE" });
// //   if (!res.ok) throw new Error("Failed to delete rental");
// //   return res.json();
// // }




// export async function getPayments() {
//   return await apiFetch("/api/payments");
// }


