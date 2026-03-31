

// // "use client";
// // import { useEffect, useState } from "react";
// // import { getRooms, addRoom } from "../../../lib/api/room";
// // import { getFloors } from "../../../lib/api/floor";
// // import Card from "@/components/Card";
// // import Form from "@/components/Form";
// // import toast from "react-hot-toast";
// // import { Room } from "@/lib/types/room";
// // import { Floor } from "@/lib/types/floor";

// // export default function RoomsPage() {
// //   const [rooms, setRooms] = useState<Room[]>([]);
// //   const [floors, setFloors] = useState<Floor[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const [selectedFloor, setSelectedFloor] = useState<string>("");
// //   const [showForm, setShowForm] = useState(false);

// //   const [formValues, setFormValues] = useState<any>({
// //     roomNumber: "",
// //     floorId: "",
// //     price: 0,
// //     status: "AVAILABLE",
// //     imageFile: null,
// //   });

// //   // =========================
// //   // FETCH DATA
// //   // =========================
// //   useEffect(() => {
// //     Promise.all([getRooms(), getFloors()])
// //       .then(([roomsData, floorsData]) => {
// //         setRooms(roomsData);
// //         setFloors(floorsData);

// //         if (floorsData.length > 0) {
// //           setFormValues((prev: any) => ({
// //             ...prev,
// //             floorId: floorsData[0].id,
// //             roomNumber: String(floorsData[0].id * 100 + 1),
// //           }));
// //         }
// //       })
// //       .catch(() => setError("Failed to load rooms/floors"))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   // =========================
// //   // GENERATE ROOM NUMBER FUNCTION
// //   // =========================
// //   function generateRoomNumber(floorId: number) {
// //     const floorRooms = rooms.filter((r) => r.floorID === floorId);
// //     let nextRoom = floorId * 100 + 1; // default 101, 201...
// //     if (floorRooms.length > 0) {
// //       const lastRoom = Math.max(
// //         ...floorRooms.map((r) => parseInt(r.roomNumber) || 0)
// //       );
// //       nextRoom = lastRoom + 1;
// //     }
// //     return String(nextRoom);
// //   }

// //   // =========================
// //   // HANDLE FLOOR CHANGE (instant room number update)
// //   // =========================
// //   function handleFloorChange(value: string) {
// //     const floorId = Number(value);
// //     const roomNumber = generateRoomNumber(floorId);

// //     setFormValues((prev: any) => ({
// //       ...prev,
// //       floorId,
// //       roomNumber,
// //     }));
// //   }

// //   // =========================
// //   // SAVE ROOM
// //   // =========================
// //   async function handleSave(values: any) {
// //     try {
// //       const newRoom = await addRoom(
// //         values.roomNumber,
// //        values.floorID,
// //         values.status,
// //         values.imageFile
// //       );

// //       setRooms((prev) => [...prev, newRoom]);
// //       toast.success(`Room ${newRoom.roomNumber} added`);
// //       setShowForm(false);

// //       // reset form
// //       const defaultFloorId = floors[0]?.id || "";
// //       setFormValues({
// //         roomNumber: defaultFloorId ? String(defaultFloorId * 100 + 1) : "",
// //         floorId: defaultFloorId,
// //         price: 0,
// //         status: "AVAILABLE",
// //         imageFile: null,
// //       });
// //     } catch {
// //       toast.error("Failed to add room");
// //     }
// //   }

// //   // =========================
// //   // FILTER BY FLOOR NAME
// //   // =========================
// //   const floorNames = [...new Set(floors.map((f) => f.name))];

// //   const filteredRooms = selectedFloor
// //     ? rooms.filter((r) => r.floorName === selectedFloor)
// //     : rooms;

// //   // =========================
// //   // UI
// //   // =========================
// //   if (loading) return <p className="p-6">Loading rooms...</p>;
// //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
// //         Rooms Dashboard
// //       </h1>

// //       {/* Add Button */}
// //       <div className="mb-6">
// //         <button
// //           onClick={() => setShowForm(true)}
// //           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
// //         >
// //           + Add Room
// //         </button>
// //       </div>

// //       {/* Floor Filter */}
// //       <div className="flex gap-3 mb-6 flex-wrap">
// //         <button
// //           onClick={() => setSelectedFloor("")}
// //           className={`px-4 py-2 rounded-lg border ${
// //             selectedFloor === ""
// //               ? "bg-indigo-600 text-white"
// //               : "bg-white hover:bg-gray-100"
// //           }`}
// //         >
// //           All Floors
// //         </button>
// //         {floorNames.map((name) => (
// //           <button
// //             key={name}
// //             onClick={() => setSelectedFloor(name)}
// //             className={`px-4 py-2 rounded-lg border ${
// //               selectedFloor === name
// //                 ? "bg-indigo-600 text-white"
// //                 : "bg-white hover:bg-gray-100"
// //             }`}
// //           >
// //             {name}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Rooms Grid */}
// //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
// //         {filteredRooms.length > 0 ? (
// //           filteredRooms.map((room) => (
// //             <li key={room.id}>
// //               <Card<Room>
// //                 item={room}
// //                 titleKey="roomNumber"
// //                 fields={[
// //                   { key: "floorName", label: "Floor" },
// //                   { key: "price", label: "Price", type: "currency" },
// //                   { key: "status", label: "Status", type: "status" },
// //                   { key: "imageUrl", label: "Image", type: "image" },
// //                 ]}
// //               />
// //             </li>
// //           ))
// //         ) : (
// //           <p className="text-gray-500">No rooms found.</p>
// //         )}
// //       </ul>

// //       {/* FORM */}
// //       {showForm && (
// //         <Form<any>
// //           initialValues={formValues}
// //           onSave={handleSave}
// //           onCancel={() => setShowForm(false)}
// //           fields={[
// //             {
// //               key: "floorId",
// //               label: "Floor",
// //               type: "select",
// //               options: floors.map((f) => ({
// //                 value: f.id.toString(),
// //                 label: f.name,
// //               })),
// //               onChange: handleFloorChange, // instant update room number
// //             },
// //             {
// //               key: "roomNumber",
// //               label: "Room Number",
// //               readOnly: true,
// //             },
// //             { key: "price", label: "Price", type: "number" },
// //             { key: "status", label: "Status" },
// //             {
// //               key: "imageFile",
// //               label: "Upload Image",
// //               type: "file",
// //             },
// //           ]}
// //         />
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import { useEffect, useState } from "react";
// import { getRooms, addRoom } from "@/lib/api/room";
// import { getFloors } from "@/lib/api/floor";
// import Card from "@/components/Card";
// import Form from "@/components/FormRoom";
// import toast from "react-hot-toast";
// import { Room } from "@/lib/types/room";
// import { Floor } from "@/lib/types/floor";

// export default function RoomsPage() {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [floors, setFloors] = useState<Floor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [selectedFloor, setSelectedFloor] = useState<String | null>(null);
//   const [showForm, setShowForm] = useState(false);

//   const [formValues, setFormValues] = useState<any>({
//     roomNumber: "",
//     floorId: "",
//     price: 0,
//     status: "AVAILABLE",
//     imageFile: null,
//   });

//   // =========================
//   // FETCH DATA
//   // =========================
//   useEffect(() => {
//     Promise.all([getRooms(), getFloors()])
//       .then(([roomsData, floorsData]) => {
//         setRooms(roomsData);
//         setFloors(floorsData);

//         if (floorsData.length > 0) {
//           const firstFloorId = floorsData[0].id;
//           setFormValues((prev: any) => ({
//             ...prev,
//             floorId: firstFloorId,
//             roomNumber: generateRoomNumber(firstFloorId, roomsData),
//           }));
//         }
//       })
//       .catch(() => setError("Failed to load rooms/floors"))
//       .finally(() => setLoading(false));
//   }, []);

//   // =========================
//   // GENERATE ROOM NUMBER FUNCTION
//   // =========================
//   function generateRoomNumber(floorId: number, allRooms: Room[] = rooms) {
//     const floorRooms = allRooms.filter((r) => r.floorID === floorId);
//     if (floorRooms.length === 0) {
//       return String(floorId * 100 + 1);
//     }
//     const lastRoom = Math.max(
//       ...floorRooms.map((r) => parseInt(r.roomNumber, 10) || 0)
//     );
//     return String(lastRoom + 1);
//   }

//   // =========================
//   // HANDLE FLOOR CHANGE
//   // =========================
//   function handleFloorChange(value: string) {
//     const floorId = Number(value);
//     const roomNumber = generateRoomNumber(floorId);
//     setFormValues((prev: any) => ({
//       ...prev,
//       floorId,
//       roomNumber,
//     }));
//   }

//   // =========================
//   // SAVE ROOM
//   // =========================
//   async function handleSave(values: any) {
//     try {
//       const newRoom = await addRoom(
//         values.roomNumber,
//         values.floorId,
//         values.status,
//         values.imageFile
//       );

//       setRooms((prev) => [...prev, newRoom]);
//       toast.success(`Room ${newRoom.roomNumber} added`);
//       setShowForm(false);

//       // reset form
//       const defaultFloorId = floors[0]?.id || "";
//       setFormValues({
//         roomNumber: defaultFloorId
//           ? generateRoomNumber(defaultFloorId, [...rooms, newRoom])
//           : "",
//         floorId: defaultFloorId,
//         price: 0,
//         status: "AVAILABLE",
//         imageFile: null,
//       });
//     } catch {
//       toast.error("Failed to add room");
//     }
//   }

//   // =========================
//   // FILTER BY FLOOR ID
//   // =========================
//   const filteredRooms = selectedFloor
//   ? rooms.filter((r) => r.floorName === selectedFloor)
//   : rooms;

//   // =========================
//   // UI
//   // =========================
//   if (loading) return <p className="p-6">Loading rooms...</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700">
//         Rooms Dashboard
//       </h1>

//       {/* Add Button */}
//       <div className="mb-6">
//         <button
//           onClick={() => setShowForm(true)}
//           className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//         >
//           + Add Room
//         </button>
//       </div>

//       {/* Floor Filter */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         <button
//           onClick={() => setSelectedFloor(null)}
//           className={`px-4 py-2 rounded-lg border ${
//             selectedFloor === null
//               ? "bg-indigo-600 text-white"
//               : "bg-white hover:bg-gray-100"
//           }`}
//         >
//           All Floors
//         </button>
//         {floors.map((f) => (
//           <button
//             key={f.name}
//             onClick={() => setSelectedFloor(f.name)}
//             className={`px-4 py-2 rounded-lg border ${
//               selectedFloor === f.name
//                 ? "bg-indigo-600 text-white"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//           >
//             Floor {f.id}
//           </button>
//         ))}
//       </div>

//       {/* Rooms Grid */}
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <li key={room.id}>
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
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-500">No rooms found.</p>
//         )}
//       </ul>

//       {/* FORM */}
//       {showForm && (
//         <Form<any>
//           initialValues={formValues}
//           onSave={handleSave}
//           onCancel={() => setShowForm(false)}
//           rooms={rooms}
//           fields={[
//             {
//               key: "floorId",
//               label: "Floor",
//               type: "select",
//               options: floors.map((f) => ({
//                 value: f.id.toString(),
//                 label: `Floor ${f.id}`,
//               })),
//             },
//             {
//               key: "roomNumber",
//               label: "Room Number",
//               readOnly: true,
//             },
//             { key: "price", label: "Price", type: "number" },
//             { key: "status", label: "Status" },
//             {
//               key: "imageFile",
//               label: "Upload Image",
//               type: "image",
//             },
//           ]}
//         />
//       )}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { getRooms, addRoom } from "@/lib/api/room";
import { getFloors } from "@/lib/api/floor";
import Card from "@/components/Card";
import Form from "@/components/FormRoom";
import toast from "react-hot-toast";
import { Room,RoomRequest } from "@/lib/types/room";
import { Floor } from "@/lib/types/floor";

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Promise.all([getRooms(), getFloors()])
      .then(([roomsData, floorsData]) => {
        setRooms(roomsData);
        setFloors(floorsData);
      })
      .catch(() => setError("Failed to load rooms/floors"))
      .finally(() => setLoading(false));
  }, []);

  // async function handleSave(values: any) {
  //   try {
  //     const newRoom = await addRoom(
  //       // values.roomNumber,
  //       values.floorId,
  //       values.status,
  //       values.imageFile
  //     );
  //    alert(values.floorI)
  //     setRooms((prev) => [...prev, newRoom]);
  //     toast.success(`Room ${newRoom.roomNumber} added`);
  //     setShowForm(false);
  //   } catch {
  //     toast.error("Failed to add room");
  //   }
  // }
  async function handleSave(values: any) {
  try {
    // Build a RoomRequest object
    const roomRequest: RoomRequest = {
      floorId: values.floorId,
      status: values.status,
      imageFile: values.imageFile,
      price: values.price, // include if you want to send price
    };

    const newRoom = await addRoom(roomRequest);

    alert(values.floorId); // ✅ fixed typo

    setRooms((prev) => [...prev, newRoom]);
    toast.success(`Room ${newRoom.roomNumber} added`);
    setShowForm(false);
  } catch (err) {
    toast.error("Failed to add room");
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
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">
        Rooms Dashboard
      </h1>

      <div className="mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          + Add Room
        </button>
      </div>

      {/* Floor Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedFloor(null)}
          className={`px-4 py-2 rounded-lg border ${
            selectedFloor === null
              ? "bg-indigo-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          All Floors
        </button>
        {floors.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFloor(f.name)}
            className={`px-4 py-2 rounded-lg border ${
              selectedFloor === f.name
                ? "bg-indigo-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Floor {f.id}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <li key={room.id}>
              <Card<Room>
                item={room}
                titleKey="roomNumber"
                fields={[
                  { key: "floorId", label: "Floor" },
                  { key: "price", label: "Price", type: "currency" },
                  { key: "status", label: "Status", type: "status" },
                  { key: "imageUrl", label: "Image", type: "image" },
                ]}
              />
            </li>
          ))
        ) : (
          <p className="text-gray-500">No rooms found.</p>
        )}
      </ul>

      {showForm && (
        <Form
          floors={floors}
          rooms={rooms}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
