// // "use client";
// // import { useEffect, useState } from "react";
// // import { getRooms } from "@/lib/api/room";
// // import { Room } from "@/lib/types/room";
// // import toast from "react-hot-toast";

// // export default function RentalSection() {
// //   const [rooms, setRooms] = useState<Room[]>([]);
// //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const loadRooms = async () => {
// //       try {
// //         const data = await getRooms();
// //         setRooms(data);
// //       } catch {
// //         setError("Failed to load rooms");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     loadRooms();
// //   }, []);

// //   const filteredRooms = selectedFloor
// //     ? rooms.filter((r) => r.floorName === selectedFloor)
// //     : rooms;

// //   return (
// //     <main id="rooms" className="p-6">
// //       <h3 className="text-2xl font-bold mb-6 text-indigo-700">Available Rooms</h3>

// //       {/* Floor Filter */}
// //       <div className="flex gap-3 mb-6 flex-wrap">
// //         <button
// //           onClick={() => setSelectedFloor(null)}
// //           className={`px-4 py-2 rounded-lg border ${
// //             selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"
// //           }`}
// //         >
// //           All Floors
// //         </button>
// //         {[...new Set(rooms.map((r) => r.floorName))].map((floor) => (
// //           <button
// //             key={floor}
// //             onClick={() => setSelectedFloor(floor)}
// //             className={`px-4 py-2 rounded-lg border ${
// //               selectedFloor === floor ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"
// //             }`}
// //           >
// //             {floor}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Rooms Grid */}
// //       {loading ? (
// //         <p>Loading rooms...</p>
// //       ) : error ? (
// //         <p className="text-red-600">{error}</p>
// //       ) : (
// //         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {filteredRooms.length > 0 ? (
// //             filteredRooms.map((room) => (
// //               <li key={room.id} className="border rounded-xl shadow-md overflow-hidden bg-white">
// //                 {room.imageUrl && (
// //                   <img
// //                     src={room.imageUrl}
// //                     alt={`Room ${room.roomNumber}`}
// //                     className="w-full h-40 object-cover"
// //                   />
// //                 )}
// //                 <div className="p-4">
// //                   <h4 className="text-lg font-semibold text-indigo-700">Room {room.roomNumber}</h4>
// //                   <p className="text-sm text-gray-600">Floor: {room.floorName}</p>
// //                   <p className="text-sm text-gray-600">Price: ${room.price.toFixed(2)}</p>
// //                   <p
// //                     className={`text-sm font-medium mt-1 ${
// //                       room.status === "ACTIVE" ? "text-green-600" : "text-red-500"
// //                     }`}
// //                   >
// //                     {room.status}
// //                   </p>
// //                   {room.status === "ACTIVE" ? (
// //                     <button
// //                       onClick={() => toast.success(`Booking started for Room ${room.roomNumber}`)}
// //                       className="mt-3 w-full px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
// //                     >
// //                       Rent Now
// //                     </button>
// //                   ) : (
// //                     <p className="mt-3 text-sm text-gray-500 text-center">Currently Rented</p>
// //                   )}
// //                 </div>
// //               </li>
// //             ))
// //           ) : (
// //             <p className="text-gray-500">No rooms available.</p>
// //           )}
// //         </ul>
// //       )}
// //     </main>
// //   );
// // }
// "use client";
// import { useEffect, useState } from "react";
// import { getRooms } from "@/lib/api/room";
// import { Room } from "@/lib/types/room";
// import toast from "react-hot-toast";
// import RoomCard from "@/components/client/RoomCard"; // ✅ import modern card

// export default function RentalSection() {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadRooms = async () => {
//       try {
//         const data = await getRooms();
//         setRooms(data);
//       } catch {
//         setError("Failed to load rooms");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadRooms();
//   }, []);

//   const filteredRooms = selectedFloor
//     ? rooms.filter((r) => r.floorName === selectedFloor)
//     : rooms;

//   return (
//     <main id="rooms" className="p-6">
//       <h3 className="text-2xl font-bold mb-6 text-indigo-700">Available Rooms</h3>

//       {/* Floor Filter */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         <button
//           onClick={() => setSelectedFloor(null)}
//           className={`px-4 py-2 rounded-lg border ${
//             selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"
//           }`}
//         >
//           All Floors
//         </button>
//         {[...new Set(rooms.map((r) => r.floorName))].map((floor) => (
//           <button
//             key={floor}
//             onClick={() => setSelectedFloor(floor)}
//             className={`px-4 py-2 rounded-lg border ${
//               selectedFloor === floor ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"
//             }`}
//           >
//             {floor}
//           </button>
//         ))}
//       </div>

//       {/* Rooms Grid */}
//       {loading ? (
//         <p>Loading rooms...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : (
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRooms.length > 0 ? (
//             filteredRooms.map((room) => (
//               <RoomCard key={room.id} room={room} />
//             ))
//           ) : (
//             <p className="text-gray-500">No rooms available.</p>
//           )}
//         </ul>
//       )}
//     </main>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { getRooms } from "@/lib/api/room";
import { Room } from "@/lib/types/room";
import RoomCard from "@/components/client/RoomCard";

export default function RentalSection() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch {
        setError("Failed to load rooms");
      } finally {
        setLoading(false);
      }
    };
    loadRooms();
  }, []);

  const filteredRooms = selectedFloor
    ? rooms.filter((r) => r.floorName === selectedFloor)
    : rooms;

  return (
    <main id="rooms" className="p-8 bg-gray-50">
      <h3 className="text-3xl font-bold mb-8 text-orange-600 text-center">
        Available Rooms
      </h3>

      {/* Floor Filter */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedFloor(null)}
          className={`px-5 py-2 rounded-full border font-medium transition ${
            selectedFloor === null
              ? "bg-orange-500 text-white shadow"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          All Floors
        </button>
        {[...new Set(rooms.map((r) => r.floorName))].map((floor) => (
          <button
            key={floor}
            onClick={() => setSelectedFloor(floor)}
            className={`px-5 py-2 rounded-full border font-medium transition ${
              selectedFloor === floor
                ? "bg-orange-500 text-white shadow"
              : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {floor}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      {loading ? (
        <p className="text-center text-gray-600">Loading rooms...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))
          ) : (
            <p className="text-center text-gray-500">No rooms available.</p>
          )}
        </ul>
      )}
    </main>
  );
}
