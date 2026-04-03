
"use client";
import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Mobile fallback */}
      <div className="md:hidden">
        <Sidebar /> {/* Or create a mobile drawer version */}
      </div>

      {/* Main content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Global Toaster */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
          success: { style: { background: "#4ade80", color: "#fff" } },
          error: { style: { background: "#f87171", color: "#fff" } },
        }}
      />
    </div>
  );
}
