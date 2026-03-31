
"use client";
import { useEffect, useState } from "react";
import { getFloors, createFloor, updateFloor } from "../../../lib/api/floor";
import Form from "../../../components/Form";
import Table from "../../../components/Table";
import { Floor, FloorRequest } from "../../../lib/types/floor";
import toast from "react-hot-toast";

export default function FloorsPage() {
  const [floors, setFloors] = useState<Floor[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getFloors();
      setFloors(data);
    })();
  }, []);

  async function handleSave(values: FloorRequest) {
    try {
      if (selectedFloor && selectedFloor.id) {
        const updated = await updateFloor(selectedFloor.id.toString(), {
          name: selectedFloor.name, // keep name read-only
          description: values.description,
          price: values.price,
          numberOfRooms:values.numberOfRooms
        });

        setFloors(prev =>
          prev.map(f => f.id === selectedFloor.id ? { ...f, ...updated } : f)
        );
        toast.success("Floor updated successfully!");
      } else {
        const created = await createFloor({ ...values });
        setFloors(prev => [...prev, created]);
        toast.success("Floor created successfully!");
      }
      setShowForm(false);
      setSelectedFloor(null);
    } catch (err) {
      console.error("Failed to save floor:", err);
      toast.error("Unable to save floor");
    }
  }

  const lastFloorName = floors.length > 0 ? floors[floors.length - 1].name : undefined;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">Floors Dashboard</h1>
        <button
          onClick={() => { setSelectedFloor(null); setShowForm(true); }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          + Add Floor
        </button>
      </div>

      <Table<Floor>
        items={floors}
        fields={[
          { key: "name", label: "Floor Name" },
          { key: "description", label: "Description" },
          { key: "price", label: "Price", type: "currency" },
          { key: "numberOfRooms", label: "Rooms", type: "number" },
        ]}
        onEdit={(f) => { setSelectedFloor(f); setShowForm(true); }}
      />

      {/* ✅ Form Modal */}
      {showForm && (
        <Form<FloorRequest>
          key={selectedFloor?.id ?? "new"}
          initialValues={selectedFloor ? {
            name: selectedFloor.name,
            description: selectedFloor.description,
            price: selectedFloor.price,
            // numberOfRooms: selectedFloor.numberOfRooms
          } : { name: "", description: "", price: 1 }}
          fields={[
            { key: "name", label: "Floor Name", readOnly: true },
            { key: "description", label: "Description" },
            { key: "price", label: "Price", type: "number" },
            // { key: "numberOfRooms", label: "Number of Rooms", type: "number" },
          ]}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setSelectedFloor(null); }}
          isEdit={!!selectedFloor}
          lastEntityName={lastFloorName}
          defaultDescription="10 rooms"
        />
      )}
    </div>
  );
}

