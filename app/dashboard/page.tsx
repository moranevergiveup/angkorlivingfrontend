"use client";
import { FaUsers, FaBuilding, FaDoorOpen, FaFileContract, FaMoneyBillWave } from "react-icons/fa";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">Admin Dashboard</h1>

      {/* Quick navigation cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard/users">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer">
            <FaUsers className="text-indigo-500 text-3xl mb-3" />
            <h2 className="text-xl font-semibold">Users</h2>
            <p className="text-gray-600">Manage all registered users.</p>
          </div>
        </Link>

        <Link href="/admin/floors">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer">
            <FaBuilding className="text-indigo-500 text-3xl mb-3" />
            <h2 className="text-xl font-semibold">Floors</h2>
            <p className="text-gray-600">Organize building floors.</p>
          </div>
        </Link>

        <Link href="/dashboard/rooms">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer">
            <FaDoorOpen className="text-indigo-500 text-3xl mb-3" />
            <h2 className="text-xl font-semibold">Rooms</h2>
            <p className="text-gray-600">Manage room availability.</p>
          </div>
        </Link>

        <Link href="/dashboard/rentals">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer">
            <FaFileContract className="text-indigo-500 text-3xl mb-3" />
            <h2 className="text-xl font-semibold">Rentals</h2>
            <p className="text-gray-600">Track rental contracts.</p>
          </div>
        </Link>

        <Link href="/dashboard/payments">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer">
            <FaMoneyBillWave className="text-indigo-500 text-3xl mb-3" />
            <h2 className="text-xl font-semibold">Payments</h2>
            <p className="text-gray-600">View and confirm payments.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
