
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
