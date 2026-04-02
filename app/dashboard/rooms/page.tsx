

// // // // // // // // "use client";
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { getRooms, addRoom } from "@/lib/api/room";
// // // // // // // // import { getFloors } from "@/lib/api/floor";
// // // // // // // // import Card from "@/components/Card";
// // // // // // // // import Form from "@/components/FormRoom";
// // // // // // // // import toast from "react-hot-toast";
// // // // // // // // import { Room,RoomRequest } from "@/lib/types/room";
// // // // // // // // import { Floor } from "@/lib/types/floor";

// // // // // // // // export default function RoomsPage() {
// // // // // // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // // // // // //   const [floors, setFloors] = useState<Floor[]>([]);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [error, setError] = useState<string | null>(null);

// // // // // // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // // // // // // //   const [showForm, setShowForm] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     Promise.all([getRooms(), getFloors()])
// // // // // // // //       .then(([roomsData, floorsData]) => {
// // // // // // // //         setRooms(roomsData);
// // // // // // // //         setFloors(floorsData);
// // // // // // // //       })
// // // // // // // //       .catch(() => setError("Failed to load rooms/floors"))
// // // // // // // //       .finally(() => setLoading(false));
// // // // // // // //   }, []);


// // // // // // // //   async function handleSave(values: any) {
// // // // // // // //   try {
// // // // // // // //     // Build a RoomRequest object
// // // // // // // //     const roomRequest: RoomRequest = {
// // // // // // // //       floorId: values.floorId,
// // // // // // // //       status: values.status,
// // // // // // // //       imageFile: values.imageFile,
// // // // // // // //       price: values.price, // include if you want to send price
// // // // // // // //     };

// // // // // // // //     const newRoom = await addRoom(roomRequest);

// // // // // // // //     alert(values.floorId); // ✅ fixed typo

// // // // // // // //     setRooms((prev) => [...prev, newRoom]);
// // // // // // // //     toast.success(`Room ${newRoom.roomNumber} added`);
// // // // // // // //     setShowForm(false);
// // // // // // // //   } catch (err) {
// // // // // // // //     toast.error("Failed to add room");
// // // // // // // //     console.error(err);
// // // // // // // //   }
// // // // // // // // }


// // // // // // // //   const filteredRooms = selectedFloor
// // // // // // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // // // // // //     : rooms;

// // // // // // // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // // // // // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="p-6">
// // // // // // // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // // // // // // //         Rooms Dashboard
// // // // // // // //       </h1>

// // // // // // // //       <div className="mb-6">
// // // // // // // //         <button
// // // // // // // //           onClick={() => setShowForm(true)}
// // // // // // // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
// // // // // // // //         >
// // // // // // // //           + Add Room
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Floor Filter */}
// // // // // // // //       <div className="flex gap-3 mb-6 flex-wrap">
// // // // // // // //         <button
// // // // // // // //           onClick={() => setSelectedFloor(null)}
// // // // // // // //           className={`px-4 py-2 rounded-lg border ${
// // // // // // // //             selectedFloor === null
// // // // // // // //               ? "bg-indigo-600 text-white"
// // // // // // // //               : "bg-white hover:bg-gray-100"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           All Floors
// // // // // // // //         </button>
// // // // // // // //         {floors.map((f) => (
// // // // // // // //           <button
// // // // // // // //             key={f.id}
// // // // // // // //             onClick={() => setSelectedFloor(f.name)}
// // // // // // // //             className={`px-4 py-2 rounded-lg border ${
// // // // // // // //               selectedFloor === f.name
// // // // // // // //                 ? "bg-indigo-600 text-white"
// // // // // // // //                 : "bg-white hover:bg-gray-100"
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             Floor {f.id}
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Rooms Grid */}
// // // // // // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
// // // // // // // //         {filteredRooms.length > 0 ? (
// // // // // // // //           filteredRooms.map((room) => (
// // // // // // // //             <li key={room.id}>
// // // // // // // //               <Card<Room>
// // // // // // // //                 item={room}
// // // // // // // //                 titleKey="roomNumber"
// // // // // // // //                 fields={[
// // // // // // // //                   { key: "floorId", label: "Floor" },
// // // // // // // //                   { key: "price", label: "Price", type: "currency" },
// // // // // // // //                   { key: "status", label: "Status", type: "status" },
// // // // // // // //                   { key: "imageUrl", label: "Image", type: "image" },
// // // // // // // //                 ]}
// // // // // // // //               />
// // // // // // // //             </li>
// // // // // // // //           ))
// // // // // // // //         ) : (
// // // // // // // //           <p className="text-gray-500">No rooms found.</p>
// // // // // // // //         )}
// // // // // // // //       </ul>

// // // // // // // //       {showForm && (
// // // // // // // //         <Form
// // // // // // // //           floors={floors}
// // // // // // // //           rooms={rooms}
// // // // // // // //           onSave={handleSave}
// // // // // // // //           onCancel={() => setShowForm(false)}
// // // // // // // //         />
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // // // // // // import { getFloors } from "@/lib/api/floor";
// // // // // // // import Card from "@/components/Card";
// // // // // // // import Form from "@/components/FormRoom";
// // // // // // // import toast from "react-hot-toast";
// // // // // // // import { Room, RoomRequest } from "@/lib/types/room";
// // // // // // // import { Floor } from "@/lib/types/floor";

// // // // // // // export default function RoomsPage() {
// // // // // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // // // // //   const [floors, setFloors] = useState<Floor[]>([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState<string | null>(null);

// // // // // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // // //   const [editingRoom, setEditingRoom] = useState<Room | null>(null);

// // // // // // //   useEffect(() => {
// // // // // // //     Promise.all([getRooms(), getFloors()])
// // // // // // //       .then(([roomsData, floorsData]) => {
// // // // // // //         setRooms(roomsData);
// // // // // // //         setFloors(floorsData);
// // // // // // //       })
// // // // // // //       .catch(() => setError("Failed to load rooms/floors"))
// // // // // // //       .finally(() => setLoading(false));
// // // // // // //   }, []);

// // // // // // //   // ✅ ADD + UPDATE in one function
// // // // // // //   async function handleSave(values: any) {
// // // // // // //     try {
// // // // // // //       const roomRequest: RoomRequest & { id?: number } = {
// // // // // // //         floorId: values.floorId,
// // // // // // //         status: values.status,
// // // // // // //         imageFile: values.imageFile,
// // // // // // //         price: values.price,
// // // // // // //       };

// // // // // // //       let savedRoom: Room;

// // // // // // //       if (values.id) {
// // // // // // //         // 🔁 UPDATE
// // // // // // //         roomRequest.id = values.id;
// // // // // // //         savedRoom = await updateRoom(roomRequest);

// // // // // // //         setRooms((prev) =>
// // // // // // //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// // // // // // //         );

// // // // // // //         toast.success(`Room ${savedRoom.roomNumber} updated`);
// // // // // // //       } else {
// // // // // // //         // ➕ ADD
// // // // // // //         savedRoom = await addRoom(roomRequest);

// // // // // // //         setRooms((prev) => [...prev, savedRoom]);

// // // // // // //         toast.success(`Room ${savedRoom.roomNumber} added`);
// // // // // // //       }

// // // // // // //       setShowForm(false);
// // // // // // //       setEditingRoom(null);
// // // // // // //     } catch (err) {
// // // // // // //       toast.error("Failed to save room");
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const filteredRooms = selectedFloor
// // // // // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // // // // //     : rooms;

// // // // // // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // // // // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // // // // //   return (
// // // // // // //     <div className="p-6">
// // // // // // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // // // // // //         Rooms Dashboard
// // // // // // //       </h1>

// // // // // // //       {/* ➕ Add Button */}
// // // // // // //       <div className="mb-6">
// // // // // // //         <button
// // // // // // //           onClick={() => {
// // // // // // //             setEditingRoom(null);
// // // // // // //             setShowForm(true);
// // // // // // //           }}
// // // // // // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
// // // // // // //         >
// // // // // // //           + Add Room
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* 🏢 Floor Filter */}
// // // // // // //       <div className="flex gap-3 mb-6 flex-wrap">
// // // // // // //         <button
// // // // // // //           onClick={() => setSelectedFloor(null)}
// // // // // // //           className={`px-4 py-2 rounded-lg border ${
// // // // // // //             selectedFloor === null
// // // // // // //               ? "bg-indigo-600 text-white"
// // // // // // //               : "bg-white hover:bg-gray-100"
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           All Floors
// // // // // // //         </button>

// // // // // // //         {floors.map((f) => (
// // // // // // //           <button
// // // // // // //             key={f.id}
// // // // // // //             onClick={() => setSelectedFloor(f.name)}
// // // // // // //             className={`px-4 py-2 rounded-lg border ${
// // // // // // //               selectedFloor === f.name
// // // // // // //                 ? "bg-indigo-600 text-white"
// // // // // // //                 : "bg-white hover:bg-gray-100"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Floor {f.id}
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* 🏠 Rooms Grid */}
// // // // // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // //         {filteredRooms.length > 0 ? (
// // // // // // //           filteredRooms.map((room) => (
// // // // // // //             <li key={room.id} className="border rounded-lg p-3">
// // // // // // //               <Card<Room>
// // // // // // //                 item={room}
// // // // // // //                 titleKey="roomNumber"
// // // // // // //                 fields={[
// // // // // // //                   { key: "floorId", label: "Floor" },
// // // // // // //                   { key: "price", label: "Price", type: "currency" },
// // // // // // //                   { key: "status", label: "Status", type: "status" },
// // // // // // //                   { key: "imageUrl", label: "Image", type: "image" },
// // // // // // //                 ]}
// // // // // // //               />

// // // // // // //               {/* ✏️ Edit Button */}
// // // // // // //               <button
// // // // // // //                 onClick={() => {
// // // // // // //                   setEditingRoom(room);
// // // // // // //                   setShowForm(true);
// // // // // // //                 }}
// // // // // // //                 className="mt-2 px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
// // // // // // //               >
// // // // // // //                 Edit
// // // // // // //               </button>
// // // // // // //             </li>
// // // // // // //           ))
// // // // // // //         ) : (
// // // // // // //           <p className="text-gray-500">No rooms found.</p>
// // // // // // //         )}
// // // // // // //       </ul>

// // // // // // //       {/* 📝 Form */}
// // // // // // //       {showForm && (
// // // // // // //         <Form
// // // // // // //           floors={floors}
// // // // // // //           rooms={rooms}
// // // // // // //           initialValues={editingRoom ?? undefined}
// // // // // // //           onSave={handleSave}
// // // // // // //           onCancel={() => {
// // // // // // //             setShowForm(false);
// // // // // // //             setEditingRoom(null);
// // // // // // //           }}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // // // // // import { getFloors } from "@/lib/api/floor";
// // // // // // import Card from "@/components/Card";
// // // // // // import Form from "@/components/FormRoom";
// // // // // // import toast from "react-hot-toast";
// // // // // // import { Room, RoomRequest } from "@/lib/types/room";
// // // // // // import { Floor } from "@/lib/types/floor";

// // // // // // export default function RoomsPage() {
// // // // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // // // //   const [floors, setFloors] = useState<Floor[]>([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState<string | null>(null);

// // // // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [editingId, setEditingId] = useState<number | null>(null); // ✅ only store ID

// // // // // //   useEffect(() => {
// // // // // //     Promise.all([getRooms(), getFloors()])
// // // // // //       .then(([roomsData, floorsData]) => {
// // // // // //         setRooms(roomsData);
// // // // // //         setFloors(floorsData);
// // // // // //       })
// // // // // //       .catch(() => setError("Failed to load rooms/floors"))
// // // // // //       .finally(() => setLoading(false));
// // // // // //   }, []);

// // // // // //   // ✅ ADD + UPDATE
// // // // // //   async function handleSave(values: any) {
// // // // // //     try {
// // // // // //       const roomRequest: RoomRequest & { id?: number } = {
// // // // // //         floorId: values.floorId,
// // // // // //         status: values.status,
// // // // // //         imageFile: values.imageFile,
// // // // // //         price: values.price,
// // // // // //       };

// // // // // //       let savedRoom: Room;

// // // // // //       if (editingId) {
// // // // // //         // 🔁 UPDATE
// // // // // //         roomRequest.id = editingId;
// // // // // //         savedRoom = await updateRoom(roomRequest);

// // // // // //         setRooms((prev) =>
// // // // // //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// // // // // //         );

// // // // // //         toast.success(`Room ${savedRoom.roomNumber} updated`);
// // // // // //       } else {
// // // // // //         // ➕ ADD
// // // // // //         savedRoom = await addRoom(roomRequest);

// // // // // //         setRooms((prev) => [...prev, savedRoom]);

// // // // // //         toast.success(`Room ${savedRoom.roomNumber} added`);
// // // // // //       }

// // // // // //       setShowForm(false);
// // // // // //       setEditingId(null);
// // // // // //     } catch (err) {
// // // // // //       toast.error("Failed to save room");
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   }

// // // // // //   const filteredRooms = selectedFloor
// // // // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // // // //     : rooms;

// // // // // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // // // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // // // // //         Rooms Dashboard
// // // // // //       </h1>

// // // // // //       {/* ➕ Add */}
// // // // // //       <div className="mb-6">
// // // // // //         <button
// // // // // //           onClick={() => {
// // // // // //             setEditingId(null);
// // // // // //             setShowForm(true);
// // // // // //           }}
// // // // // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
// // // // // //         >
// // // // // //           + Add Room
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* 🏢 Filter */}
// // // // // //       <div className="flex gap-3 mb-6 flex-wrap">
// // // // // //         <button
// // // // // //           onClick={() => setSelectedFloor(null)}
// // // // // //           className={`px-4 py-2 rounded-lg border ${
// // // // // //             selectedFloor === null
// // // // // //               ? "bg-indigo-600 text-white"
// // // // // //               : "bg-white"
// // // // // //           }`}
// // // // // //         >
// // // // // //           All Floors
// // // // // //         </button>

// // // // // //         {floors.map((f) => (
// // // // // //           <button
// // // // // //             key={f.id}
// // // // // //             onClick={() => setSelectedFloor(f.name)}
// // // // // //             className={`px-4 py-2 rounded-lg border ${
// // // // // //               selectedFloor === f.name
// // // // // //                 ? "bg-indigo-600 text-white"
// // // // // //                 : "bg-white"
// // // // // //             }`}
// // // // // //           >
// // // // // //             Floor {f.id}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* 🏠 Rooms */}
// // // // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // //         {filteredRooms.map((room) => (
// // // // // //           <li key={room.id} className="border p-3 rounded-lg">
// // // // // //             <Card<Room>
// // // // // //               item={room}
// // // // // //               titleKey="roomNumber"
// // // // // //               fields={[
// // // // // //                 { key: "floorId", label: "Floor" },
// // // // // //                 { key: "price", label: "Price", type: "currency" },
// // // // // //                 { key: "status", label: "Status", type: "status" },
// // // // // //                 { key: "imageUrl", label: "Image", type: "image" },
// // // // // //               ]}
// // // // // //             />

// // // // // //             {/* ✏️ Edit */}
// // // // // //             <button
// // // // // //               onClick={() => {
// // // // // //                 setEditingId(room.id); // ✅ only set ID
// // // // // //                 setShowForm(true);
// // // // // //               }}
// // // // // //               className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
// // // // // //             >
// // // // // //               Edit
// // // // // //             </button>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>

// // // // // //       {/* 📝 Form (NO initialValues) */}
// // // // // //       {showForm && (
// // // // // //         <Form
// // // // // //           floors={floors}
// // // // // //           rooms={rooms}
// // // // // //           onSave={handleSave}
// // // // // //           onCancel={() => {
// // // // // //             setShowForm(false);
// // // // // //             setEditingId(null);
// // // // // //           }}
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // // // // import { getFloors } from "@/lib/api/floor";
// // // // // import Card from "@/components/Card";
// // // // // import Form from "@/components/FormRoom";
// // // // // import toast from "react-hot-toast";
// // // // // import { Room, RoomRequest } from "@/lib/types/room";
// // // // // import { Floor } from "@/lib/types/floor";

// // // // // export default function RoomsPage() {
// // // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // // //   const [floors, setFloors] = useState<Floor[]>([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState<string | null>(null);

// // // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // // // //   const [showForm, setShowForm] = useState(false);
// // // // //   const [editingId, setEditingId] = useState<number | null>(null); // ✅ only store ID

// // // // //   useEffect(() => {
// // // // //     Promise.all([getRooms(), getFloors()])
// // // // //       .then(([roomsData, floorsData]) => {
// // // // //         setRooms(roomsData);
// // // // //         setFloors(floorsData);
// // // // //       })
// // // // //       .catch(() => setError("Failed to load rooms/floors"))
// // // // //       .finally(() => setLoading(false));
// // // // //   }, []);

// // // // //   // ✅ ADD + UPDATE
// // // // //   async function handleSave(values: any) {
// // // // //     try {
// // // // //       const roomRequest: RoomRequest & { id?: number } = {
// // // // //         floorId: values.floorId,
// // // // //         status: values.status,
// // // // //         imageFile: values.imageFile,
// // // // //         price: values.price,
// // // // //       };

// // // // //       let savedRoom: Room;

// // // // //       if (editingId) {
// // // // //         // 🔁 UPDATE
// // // // //         roomRequest.id = editingId;
// // // // //         savedRoom = await updateRoom(roomRequest);

// // // // //         setRooms((prev) =>
// // // // //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// // // // //         );

// // // // //         toast.success(`Room ${savedRoom.roomNumber} updated`);
// // // // //       } else {
// // // // //         // ➕ ADD
// // // // //         savedRoom = await addRoom(roomRequest);

// // // // //         setRooms((prev) => [...prev, savedRoom]);

// // // // //         toast.success(`Room ${savedRoom.roomNumber} added`);
// // // // //       }

// // // // //       setShowForm(false);
// // // // //       setEditingId(null);
// // // // //     } catch (err) {
// // // // //       toast.error("Failed to save room");
// // // // //       console.error(err);
// // // // //     }
// // // // //   }

// // // // //   const filteredRooms = selectedFloor
// // // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // // //     : rooms;

// // // // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // // // //         Rooms Dashboard
// // // // //       </h1>

// // // // //       {/* ➕ Add */}
// // // // //       <div className="mb-6">
// // // // //         <button
// // // // //           onClick={() => {
// // // // //             setEditingId(null);
// // // // //             setShowForm(true);
// // // // //           }}
// // // // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
// // // // //         >
// // // // //           + Add Room
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* 🏢 Filter */}
// // // // //       <div className="flex gap-3 mb-6 flex-wrap">
// // // // //         <button
// // // // //           onClick={() => setSelectedFloor(null)}
// // // // //           className={`px-4 py-2 rounded-lg border ${
// // // // //             selectedFloor === null
// // // // //               ? "bg-indigo-600 text-white"
// // // // //               : "bg-white"
// // // // //           }`}
// // // // //         >
// // // // //           All Floors
// // // // //         </button>

// // // // //         {floors.map((f) => (
// // // // //           <button
// // // // //             key={f.id}
// // // // //             onClick={() => setSelectedFloor(f.name)}
// // // // //             className={`px-4 py-2 rounded-lg border ${
// // // // //               selectedFloor === f.name
// // // // //                 ? "bg-indigo-600 text-white"
// // // // //                 : "bg-white"
// // // // //             }`}
// // // // //           >
// // // // //             Floor {f.id}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* 🏠 Rooms */}
// // // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //         {filteredRooms.map((room) => (
// // // // //           <li key={room.id} className="border p-3 rounded-lg">
// // // // //             <Card<Room>
// // // // //               item={room}
// // // // //               titleKey="roomNumber"
// // // // //               fields={[
// // // // //                 { key: "floorID", label: "Floor" },
// // // // //                 { key: "price", label: "Price", type: "currency" },
// // // // //                 { key: "status", label: "Status", type: "status" },
// // // // //                 { key: "imageUrl", label: "Image", type: "image" },
// // // // //               ]}
// // // // //             />

// // // // //             {/* ✏️ Edit */}
// // // // //             <button
// // // // //               onClick={() => {
// // // // //                 setEditingId(room.id); // ✅ only set ID
// // // // //                 setShowForm(true);
// // // // //               }}
// // // // //               className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
// // // // //             >
// // // // //               Edit
// // // // //             </button>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       {/* 📝 Form (NO initialValues) */}
// // // // //       {showForm && (
// // // // //         <Form
// // // // //           floors={floors}
// // // // //           rooms={rooms}
// // // // //           onSave={handleSave}
// // // // //           onCancel={() => {
// // // // //             setShowForm(false);
// // // // //             setEditingId(null);
// // // // //           }}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // // // import { getFloors } from "@/lib/api/floor";
// // // // import Card from "@/components/Card";
// // // // import Form from "@/components/FormRoom";
// // // // import toast from "react-hot-toast";
// // // // import { Room, RoomRequest } from "@/lib/types/room";
// // // // import { Floor } from "@/lib/types/floor";

// // // // export default function RoomsPage() {
// // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // //   const [floors, setFloors] = useState<Floor[]>([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);

// // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [editingRoom, setEditingRoom] = useState<Room | null>(null); // ✅ full object

// // // //   useEffect(() => {
// // // //     Promise.all([getRooms(), getFloors()])
// // // //       .then(([roomsData, floorsData]) => {
// // // //         setRooms(roomsData);
// // // //         setFloors(floorsData);
// // // //       })
// // // //       .catch(() => setError("Failed to load rooms/floors"))
// // // //       .finally(() => setLoading(false));
// // // //   }, []);

// // // //   // ✅ ADD + UPDATE
// // // //   async function handleSave(values: any) {
// // // //     try {
// // // //       const roomRequest: RoomRequest & { id?: number } = {
// // // //         floorId: values.floorId,
// // // //         status: values.status,
// // // //         imageFile: values.imageFile,
// // // //         price: values.price,
// // // //       };

// // // //       let savedRoom: Room;

// // // //       if (editingRoom) {
// // // //         // 🔁 UPDATE
// // // //         roomRequest.id = editingRoom.id;
// // // //         savedRoom = await updateRoom(roomRequest);

// // // //         setRooms((prev) =>
// // // //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// // // //         );

// // // //         toast.success(`Room ${savedRoom.roomNumber} updated`);
// // // //       } else {
// // // //         // ➕ ADD
// // // //         savedRoom = await addRoom(roomRequest);

// // // //         setRooms((prev) => [...prev, savedRoom]);

// // // //         toast.success(`Room ${savedRoom.roomNumber} added`);
// // // //       }

// // // //       setShowForm(false);
// // // //       setEditingRoom(null);
// // // //     } catch (err) {
// // // //       toast.error("Failed to save room");
// // // //       console.error(err);
// // // //     }
// // // //   }

// // // //   const filteredRooms = selectedFloor
// // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // //     : rooms;

// // // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // //   return (
// // // //     <div className="p-6">
// // // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // // //         Rooms Dashboard
// // // //       </h1>

// // // //       {/* ➕ Add */}
// // // //       <div className="mb-6">
// // // //         <button
// // // //           onClick={() => {
// // // //             setEditingRoom(null); // empty form
// // // //             setShowForm(true);
// // // //           }}
// // // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
// // // //         >
// // // //           + Add Room
// // // //         </button>
// // // //       </div>

// // // //       {/* 🏢 Filter */}
// // // //       <div className="flex gap-3 mb-6 flex-wrap">
// // // //         <button
// // // //           onClick={() => setSelectedFloor(null)}
// // // //           className={`px-4 py-2 rounded-lg border ${
// // // //             selectedFloor === null
// // // //               ? "bg-indigo-600 text-white"
// // // //               : "bg-white"
// // // //           }`}
// // // //         >
// // // //           All Floors
// // // //         </button>

// // // //         {floors.map((f) => (
// // // //           <button
// // // //             key={f.id}
// // // //             onClick={() => setSelectedFloor(f.name)}
// // // //             className={`px-4 py-2 rounded-lg border ${
// // // //               selectedFloor === f.name
// // // //                 ? "bg-indigo-600 text-white"
// // // //                 : "bg-white"
// // // //             }`}
// // // //           >
// // // //             Floor {f.id}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {/* 🏠 Rooms */}
// // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //         {filteredRooms.map((room) => (
// // // //           <li key={room.id} className="border p-3 rounded-lg">
// // // //             <Card<Room>
// // // //               item={room}
// // // //               titleKey="roomNumber"
// // // //               fields={[
// // // //                 { key: "floorId", label: "Floor" },
// // // //                 { key: "price", label: "Price", type: "currency" },
// // // //                 { key: "status", label: "Status", type: "status" },
// // // //                 { key: "imageUrl", label: "Image", type: "image" },
// // // //               ]}
// // // //             />

// // // //             {/* ✏️ Edit */}
// // // //             <button
// // // //               onClick={() => {
// // // //                 setEditingRoom(room); // ✅ pass full data
// // // //                 setShowForm(true);
// // // //               }}
// // // //               className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
// // // //             >
// // // //               Edit
// // // //             </button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {/* 📝 Form (WITH initialValues) */}
// // // //       {showForm && (
// // // //         <Form
// // // //           floors={floors}
// // // //           rooms={rooms}
// // // //           initialValues={editingRoom ?? undefined} // ✅ pre-fill
// // // //           onSave={handleSave}
// // // //           onCancel={() => {
// // // //             setShowForm(false);
// // // //             setEditingRoom(null);
// // // //           }}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // // import { getFloors } from "@/lib/api/floor";
// // // import Card from "@/components/Card";
// // // import Form from "@/components/FormRoom";
// // // import toast from "react-hot-toast";
// // // import { Room, RoomRequest } from "@/lib/types/room";
// // // import { Floor } from "@/lib/types/floor";

// // // export default function RoomsPage() {
// // //   const [rooms, setRooms] = useState<Room[]>([]);
// // //   const [floors, setFloors] = useState<Floor[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);

// // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [editingRoom, setEditingRoom] = useState<Room | null>(null);

// // //   // 🔄 Load data
// // //   useEffect(() => {
// // //     const loadData = async () => {
// // //       try {
// // //         const [roomsData, floorsData] = await Promise.all([
// // //           getRooms(),
// // //           getFloors(),
// // //         ]);
// // //         setRooms(roomsData);
// // //         setFloors(floorsData);
// // //       } catch {
// // //         setError("Failed to load rooms/floors");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadData();
// // //   }, []);

// // //   // 💾 Save (Add + Update)
// // //   async function handleSave(values: any) {
// // //     try {
// // //       const roomRequest: RoomRequest & { id?: number } = {
// // //         floorId: values.floorId,
// // //         status: values.status,
// // //         price: values.price,
// // //         imageFile: values.imageFile,
// // //       };

// // //       let savedRoom: Room;

// // //       if (editingRoom) {
// // //         // ✏️ UPDATE
// // //         roomRequest.id = editingRoom.id;
// // //         savedRoom = await updateRoom(roomRequest);

// // //         setRooms((prev) =>
// // //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// // //         );

// // //         toast.success(`Room ${savedRoom.roomNumber} updated`);
// // //       } else {
// // //         // ➕ ADD
// // //         savedRoom = await addRoom(roomRequest);

// // //         setRooms((prev) => [...prev, savedRoom]);

// // //         toast.success(`Room ${savedRoom.roomNumber} added`);
// // //       }

// // //       setShowForm(false);
// // //       setEditingRoom(null);
// // //     } catch (err) {
// // //       toast.error("Failed to save room");
// // //       console.error(err);
// // //     }
// // //   }

// // //   // 🔍 Filter
// // //   const filteredRooms = selectedFloor
// // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // //     : rooms;

// // //   // ⏳ States
// // //   if (loading) return <p className="p-6">Loading rooms...</p>;
// // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// // //         Rooms Dashboard
// // //       </h1>

// // //       {/* ➕ Add Button */}
// // //       <div className="mb-6">
// // //         <button
// // //           onClick={() => {
// // //             setEditingRoom(null);
// // //             setShowForm(true);
// // //           }}
// // //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
// // //         >
// // //           + Add Room
// // //         </button>
// // //       </div>

// // //       {/* 🏢 Floor Filter */}
// // //       <div className="flex gap-3 mb-6 flex-wrap">
// // //         <button
// // //           onClick={() => setSelectedFloor(null)}
// // //           className={`px-4 py-2 rounded-lg border ${
// // //             selectedFloor === null
// // //               ? "bg-indigo-600 text-white"
// // //               : "bg-white hover:bg-gray-100"
// // //           }`}
// // //         >
// // //           All Floors
// // //         </button>

// // //         {floors.map((f) => (
// // //           <button
// // //             key={f.id}
// // //             onClick={() => setSelectedFloor(f.name)}
// // //             className={`px-4 py-2 rounded-lg border ${
// // //               selectedFloor === f.name
// // //                 ? "bg-indigo-600 text-white"
// // //                 : "bg-white hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             Floor {f.id}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* 🏠 Rooms Grid */}
// // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //         {filteredRooms.length > 0 ? (
// // //           filteredRooms.map((room) => (
// // //             <li key={room.id} className="border rounded-lg p-3">
// // //               <Card<Room>
// // //                 item={room}
// // //                 titleKey="roomNumber"
// // //                 fields={[
// // //                   { key: "floorID", label: "Floor" },
// // //                   { key: "price", label: "Price", type: "currency" },
// // //                   { key: "status", label: "Status", type: "status" },
// // //                   { key: "imageUrl", label: "Image", type: "image" },
// // //                 ]}
// // //               />

// // //               {/* ✏️ Edit Button */}
// // //               <button
// // //                 onClick={() => {
// // //                   setEditingRoom(room);
// // //                   setShowForm(true);
// // //                 }}
// // //                 className="mt-2 px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
// // //               >
// // //                 Edit
// // //               </button>
// // //             </li>
// // //           ))
// // //         ) : (
// // //           <p className="text-gray-500">No rooms found.</p>
// // //         )}
// // //       </ul>

// // //       {/* 📝 Form */}
// // //       {showForm && (
// // //         <Form
// // //           floors={floors}
// // //           rooms={rooms}
// // //           initialValues={editingRoom ?? undefined} // ✅ pre-fill
// // //           onSave={handleSave}
// // //           onCancel={() => {
// // //             setShowForm(false);
// // //             setEditingRoom(null);
// // //           }}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useEffect, useState } from "react";
// // import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// // import { getFloors } from "@/lib/api/floor";
// // import Card from "@/components/Card";
// // import FormRoom from "@/components/FormRoom";
// // import toast from "react-hot-toast";
// // import { Room, RoomRequest } from "@/lib/types/room";
// // import { Floor } from "@/lib/types/floor";

// // export default function RoomsPage() {
// //   const [rooms, setRooms] = useState<Room[]>([]);
// //   const [floors, setFloors] = useState<Floor[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// //   const [showForm, setShowForm] = useState(false);
// //   const [editingRoom, setEditingRoom] = useState<Room | null>(null);

// //   // 🔄 Load data
// //   useEffect(() => {
// //     async function loadData() {
// //       try {
// //         const [roomsData, floorsData] = await Promise.all([
// //           getRooms(),
// //           getFloors(),
// //         ]);
// //         setRooms(roomsData);
// //         setFloors(floorsData);
// //       } catch {
// //         setError("Failed to load data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     loadData();
// //   }, []);

// //   // 💾 Save
// //   async function handleSave(values: any) {
// //     try {
// //       let savedRoom: Room;

// //       if (editingRoom) {
// //         // UPDATE
// //         savedRoom = await updateRoom({
// //           id: editingRoom.id,
// //           ...values,
// //         });

// //         setRooms((prev) =>
// //           prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
// //         );

// //         toast.success("Room updated");
// //       } else {
// //         // ADD
// //         savedRoom = await addRoom(values);

// //         setRooms((prev) => [...prev, savedRoom]);

// //         toast.success("Room added");
// //       }

// //       setShowForm(false);
// //       setEditingRoom(null);
// //     } catch (err) {
// //       toast.error("Save failed");
// //       console.error(err);
// //     }
// //   }

// //   // 🔍 Filter
// //   const filteredRooms = selectedFloor
// //     ? rooms.filter((r) => r.floorName === selectedFloor)
// //     : rooms;

// //   if (loading) return <p className="p-6">Loading...</p>;
// //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold text-indigo-700 mb-6">
// //         Rooms Dashboard
// //       </h1>

// //       {/* Add Button */}
// //       <button
// //         onClick={() => {
// //           setEditingRoom(null);
// //           setShowForm(true);
// //         }}
// //         className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg"
// //       >
// //         + Add Room
// //       </button>

// //       {/* Floor Filter */}
// //       <div className="flex gap-2 mb-6 flex-wrap">
// //         <button onClick={() => setSelectedFloor(null)}>All</button>

// //         {floors.map((f) => (
// //           <button key={f.id} onClick={() => setSelectedFloor(f.name)}>
// //             {f.name}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Rooms */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {filteredRooms.map((room) => (
// //           <div key={room.id} className="border p-3 rounded-lg">
// //             <Card<Room>
// //               item={room}
// //               titleKey="roomNumber"
// //               fields={[
// //                 { key: "floorId", label: "Floor" },
// //                 { key: "price", label: "Price", type: "currency" },
// //                 { key: "status", label: "Status", type: "status" },
// //                 { key: "imageUrl", label: "Image", type: "image" },
// //               ]}
// //             />

// //             <button
// //               onClick={() => {
// //                 setEditingRoom(room);
// //                 setShowForm(true);
// //               }}
// //               className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
// //             >
// //               Edit
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Form */}
// //       {showForm && (
// //         <FormRoom
// //           floors={floors}
// //           initialValues={editingRoom}
// //           isEdit={!!editingRoom}
// //           onSave={handleSave}
// //           onCancel={() => {
// //             setShowForm(false);
// //             setEditingRoom(null);
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// import { getFloors } from "@/lib/api/floor";
// import Card from "@/components/Card";
// import FormRoom from "@/components/FormRoom";
// import toast from "react-hot-toast";
// import { Room, RoomRequest } from "@/lib/types/room";
// import { Floor } from "@/lib/types/floor";

// export default function RoomsPage() {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [floors, setFloors] = useState<Floor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [editingRoom, setEditingRoom] = useState<Room | null>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const [roomsData, floorsData] = await Promise.all([getRooms(), getFloors()]);
//         setRooms(roomsData);
//         setFloors(floorsData);
//       } catch {
//         setError("Failed to load rooms/floors");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   async function handleSave(values: any) {
//     try {
//       let savedRoom: Room;

//       if (editingRoom) {
//         savedRoom = await updateRoom({ id: editingRoom.id, ...values });
//         setRooms((prev) => prev.map((r) => (r.id === savedRoom.id ? savedRoom : r)));
//         toast.success(`Room ${savedRoom.roomNumber} updated`);
//       } else {
//         savedRoom = await addRoom(values);
//         setRooms((prev) => [...prev, savedRoom]);
//         toast.success(`Room ${savedRoom.roomNumber} added`);
//       }

//       setShowForm(false);
//       setEditingRoom(null);
//     } catch (err) {
//       toast.error("Failed to save room");
//       console.error(err);
//     }
//   }

//   const filteredRooms = selectedFloor
//     ? rooms.filter((r) => r.floorName === selectedFloor)
//     : rooms;

//   if (loading) return <p className="p-6">Loading rooms...</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700">Rooms Dashboard</h1>

//       <div className="mb-6">
//         <button
//           onClick={() => { setEditingRoom(null); setShowForm(true); }}
//           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//         >
//           + Add Room
//         </button>
//       </div>

//       {/* Floor Filter */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         <button
//           onClick={() => setSelectedFloor(null)}
//           className={`px-4 py-2 rounded-lg border ${selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
//         >
//           All Floors
//         </button>
//         {floors.map((f) => (
//           <button
//             key={f.id}
//             onClick={() => setSelectedFloor(f.name)}
//             className={`px-4 py-2 rounded-lg border ${selectedFloor === f.name ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
//           >
//             {f.name}
//           </button>
//         ))}
//       </div>

//       {/* Rooms Grid */}
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <li key={room.id} className="border rounded-lg p-3">
//               <Card<Room>
//                 item={room}
//                 titleKey="roomNumber"
//                 fields={[
//                   { key: "floorId", label: "Floor" },
//                   { key: "price", label: "Price", type: "currency" },
//                   { key: "status", label: "Status", type: "status" },
//                   { key: "imageUrl", label: "Image", type: "image" },
//                 ]}
//               />
//               <button
//                 onClick={() => { setEditingRoom(room); setShowForm(true); }}
//                 className="mt-2 px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-500">No rooms found.</p>
//         )}
//       </ul>

//       {showForm && (
//         <FormRoom
//           floors={floors}
//           initialValues={editingRoom ?? undefined}
//           isEdit={!!editingRoom}
//           onSave={handleSave}
//           onCancel={() => { setShowForm(false); setEditingRoom(null); }}
//         />
//       )}
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
// import { getFloors } from "@/lib/api/floor";
// import Card from "@/components/Card";
// import FormRoom from "@/components/FormRoom";
// import toast from "react-hot-toast";
// import { Room, RoomRequest } from "@/lib/types/room";
// import { Floor } from "@/lib/types/floor";

// export default function RoomsPage() {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [floors, setFloors] = useState<Floor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [editingRoom, setEditingRoom] = useState<Room | null>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const [roomsData, floorsData] = await Promise.all([getRooms(), getFloors()]);
//         setRooms(roomsData);
//         setFloors(floorsData);
//       } catch {
//         setError("Failed to load rooms/floors");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   async function handleSave(values: any) {
//     try {
//       let savedRoom: Room;

//       if (editingRoom) {
//         // only send status and imageFile for update
//         savedRoom = await updateRoom({ 
//           id: editingRoom.id, 
//           status: values.status, 
//           imageFile: values.imageFile 
//         });

//         setRooms((prev) => prev.map((r) => (r.id === savedRoom.id ? savedRoom : r)));
//         toast.success(`Room ${savedRoom.roomNumber} updated`);
//       } else {
//         // full add
//         savedRoom = await addRoom(values);
//         setRooms((prev) => [...prev, savedRoom]);
//         toast.success(`Room ${savedRoom.roomNumber} added`);
//       }

//       setShowForm(false);
//       setEditingRoom(null);
//     } catch (err) {
//       toast.error("Failed to save room");
//       console.error(err);
//     }
//   }

//   const filteredRooms = selectedFloor
//     ? rooms.filter((r) => r.floorName === selectedFloor)
//     : rooms;

//   if (loading) return <p className="p-6">Loading rooms...</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700">Rooms Dashboard</h1>

//       <div className="mb-6">
//         <button
//           onClick={() => { setEditingRoom(null); setShowForm(true); }}
//           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//         >
//           + Add Room
//         </button>
//       </div>

//       {/* Floor Filter */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         <button
//           onClick={() => setSelectedFloor(null)}
//           className={`px-4 py-2 rounded-lg border ${selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
//         >
//           All Floors
//         </button>
//         {floors.map((f) => (
//           <button
//             key={f.id}
//             onClick={() => setSelectedFloor(f.name)}
//             className={`px-4 py-2 rounded-lg border ${selectedFloor === f.name ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
//           >
//             {f.name}
//           </button>
//         ))}
//       </div>

//       {/* Rooms Grid */}
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <li key={room.id} className="border rounded-lg p-3">
//               <Card<Room>
//                 item={room}
//                 titleKey="roomNumber"
//                 fields={[
//                   { key: "floorID", label: "Floor" },
//                   { key: "price", label: "Price", type: "currency" },
//                   { key: "status", label: "Status", type: "status" },
//                   { key: "imageUrl", label: "Image", type: "image" },
//                 ]}
//               />
//               <button
//                 onClick={() => { setEditingRoom(room); setShowForm(true); }}
//                 className="mt-2 px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-500">No rooms found.</p>
//         )}
//       </ul>

//       {showForm && (
//         <FormRoom
//           floors={floors}
//           initialValues={editingRoom ?? undefined}
//           isEdit={!!editingRoom}
//           onSave={handleSave}
//           onCancel={() => { setShowForm(false); setEditingRoom(null); }}
//         />
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { getRooms, addRoom, updateRoom } from "@/lib/api/room";
import { getFloors } from "@/lib/api/floor";
import Card from "@/components/admin/Card";
import FormRoom from "@/components/admin/FormRoom";
import toast from "react-hot-toast";
import { Room } from "@/lib/types/room";
import { Floor } from "@/lib/types/floor";

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [roomsData, floorsData] = await Promise.all([getRooms(), getFloors()]);
        setRooms(roomsData);
        setFloors(floorsData);
      } catch {
        setError("Failed to load rooms/floors");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  async function handleSave(values: any) {
    try {
      let savedRoom: Room;

      if (editingRoom) {
        // ✅ Edit mode: only update status + image
        savedRoom = await updateRoom({
          id: editingRoom.id,
          status: values.status,
          imageFile: values.imageFile,
        });

        setRooms((prev) =>
          prev.map((r) => (r.id === savedRoom.id ? savedRoom : r))
        );
        toast.success(`Room ${savedRoom.roomNumber} updated`);
      } else {
        // ✅ Create mode: send all fields
        savedRoom = await addRoom({
          // roomNumber: values.roomNumber,
          floorId: values.floorId,
          price: values.price,
          status: values.status,
          imageFile: values.imageFile,
        });

        setRooms((prev) => [...prev, savedRoom]);
        toast.success(`Room ${savedRoom.roomNumber} added`);
      }

      setShowForm(false);
      setEditingRoom(null);
    } catch (err) {
      toast.error("Failed to save room");
      console.error(err);
    }
  }

  const filteredRooms = selectedFloor
    ? rooms.filter((r) => r.floorName === selectedFloor)
    : rooms;

  if (loading) return <p className="p-6">Loading rooms...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Rooms Dashboard</h1>

      <div className="mb-6">
        <button
          onClick={() => { setEditingRoom(null); setShowForm(true); }}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          + Add Room
        </button>
      </div>

      {/* Floor Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedFloor(null)}
          className={`px-4 py-2 rounded-lg border ${selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          All Floors
        </button>
        {floors.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFloor(f.name)}
            className={`px-4 py-2 rounded-lg border ${selectedFloor === f.name ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <li key={room.id} className="border rounded-lg p-3">
              <Card<Room>
                item={room}
                titleKey="roomNumber"
                fields={[
                  { key: "floorName", label: "Floor" },
                  { key: "price", label: "Price", type: "currency" },
                  { key: "status", label: "Status", type: "status" },
                  { key: "imageUrl", label: "Image", type: "image" },
                ]}
              />
              <button
                onClick={() => { setEditingRoom(room); setShowForm(true); }}
                className="mt-2 px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Edit
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No rooms found.</p>
        )}
      </ul>

      {showForm && (
        <FormRoom
          floors={floors}
          initialValues={editingRoom ?? undefined}
          isEdit={!!editingRoom}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingRoom(null); }}
        />
      )}
    </div>
  );
}
