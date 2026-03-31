"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaUsers,
  FaBuilding,
  FaDoorOpen,
  FaFileContract,
  FaMoneyBillWave,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
  // Clear localStorage
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  // Clear cookies (middleware reads cookies)
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // Redirect to root (login page)
  window.location.href = "/";
};


  return (
    <aside
      className={`bg-indigo-900 text-white min-h-screen p-4 shadow-lg transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-white mb-6 focus:outline-none"
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Title */}
      {!collapsed && (
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
      )}

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard/users"
          className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded"
        >
          <FaUsers /> {!collapsed && "Users"}
        </Link>
        <Link
          href="/dashboard/floors"
          className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded"
        >
          <FaBuilding /> {!collapsed && "Floors"}
        </Link>
        <Link
          href="/dashboard/rooms"
          className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded"
        >
          <FaDoorOpen /> {!collapsed && "Rooms"}
        </Link>
        <Link
          href="/dashboard/rentals"
          className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded"
        >
          <FaFileContract /> {!collapsed && "Rentals"}
        </Link>
        <Link
          href="/dashboard/payments"
          className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded"
        >
          <FaMoneyBillWave /> {!collapsed && "Payments"}
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:bg-red-700 p-2 rounded mt-auto"
        >
          <FaSignOutAlt /> {!collapsed && "Logout"}
        </button>
      </nav>
    </aside>
  );
}
