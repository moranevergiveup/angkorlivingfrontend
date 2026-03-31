"use client";
import { useEffect, useState } from "react";
import { getRentals } from "../../../lib/api/rental";

interface Rental {
  id: number;
  roomNumber: string;
  tenantEmail: string;
  startDate: string;
  endDate: string;
  status: string;
  monthlyRent: number;
}

export default function RentalsPage() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRentals()
      .then(setRentals)
      .catch((err) => {
        console.error(err);
        setError("Failed to load rentals");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading rentals...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Rental Management</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Room</th>
              <th className="px-4 py-3 text-left">Tenant</th>
              <th className="px-4 py-3 text-left">Start</th>
              <th className="px-4 py-3 text-left">End</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Monthly Rent</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentals.length > 0 ? (
              rentals.map((rental) => (
                <tr key={rental.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{rental.id}</td>
                  <td className="px-4 py-3">{rental.roomNumber}</td>
                  <td className="px-4 py-3">{rental.tenantEmail}</td>
                  <td className="px-4 py-3">{rental.startDate}</td>
                  <td className="px-4 py-3">{rental.endDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        rental.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {rental.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">${rental.monthlyRent}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
                  No rentals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
