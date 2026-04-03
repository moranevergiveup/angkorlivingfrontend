import { Room } from "@/lib/types/room";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full max-w-xs">
      {/* Image */}
      {room.imageUrl ? (
        <img
          src={room.imageUrl}
          alt={`Room ${room.roomNumber}`}
          className="w-full h-32 object-cover rounded-t-xl"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-xl text-sm">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-3">
        <h3 className="text-md font-semibold text-orange-600">
          Room {room.roomNumber}
        </h3>
        <p className="text-xs text-gray-600">Floor: {room.floorName}</p>
        <p className="text-xs text-gray-600">Price: ${room.price.toFixed(2)}</p>

        {/* Status Badge */}
        <span
          className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium ${
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
            className="mt-3 w-full px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-medium hover:from-orange-600 hover:to-yellow-600 transition"
          >
            Rent Now
          </button>
        ) : (
          <p className="mt-3 text-xs text-gray-400 text-center">
            Currently Rented
          </p>
        )}
      </div>
    </div>
  );
}
