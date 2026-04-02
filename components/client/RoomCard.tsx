// import { Room } from "@/lib/types/room";

// export default function RoomCard({ room }: { room: Room }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
//       {/* Image */}
//       {room.imageUrl ? (
//         <img
//           src={room.imageUrl}
//           alt={`Room ${room.roomNumber}`}
//           className="w-full h-48 object-cover"
//         />
//       ) : (
//         <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//           No Image
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-indigo-700">
//           Room {room.roomNumber}
//         </h3>
//         <p className="text-sm text-gray-600">Floor: {room.floorName}</p>
//         <p className="text-sm text-gray-600">Price: ${room.price.toFixed(2)}</p>

//         {/* Status Badge */}
//         <span
//           className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
//             room.status === "ACTIVE"
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {room.status}
//         </span>

//         {/* Action */}
//         {room.status === "ACTIVE" ? (
//           <button
//             className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition"
//           >
//             Rent Now
//           </button>
//         ) : (
//           <p className="mt-4 text-sm text-gray-400 text-center">
//             Currently Rented
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
import { Room } from "@/lib/types/room";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Image */}
      {room.imageUrl ? (
        <img
          src={room.imageUrl}
          alt={`Room ${room.roomNumber}`}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-2xl">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-orange-600">
          Room {room.roomNumber}
        </h3>
        <p className="text-sm text-gray-600">Floor: {room.floorName}</p>
        <p className="text-sm text-gray-600">Price: ${room.price.toFixed(2)}</p>

        {/* Status Badge */}
        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
            room.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {room.status === "ACTIVE" ? "Available" : "Rented"}
        </span>

        {/* Action */}
        {room.status === "ACTIVE" ? (
          <button
            className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:from-orange-600 hover:to-yellow-600 transition"
          >
            Rent Now
          </button>
        ) : (
          <p className="mt-4 text-sm text-gray-400 text-center">
            Currently Rented
          </p>
        )}
      </div>
    </div>
  );
}
