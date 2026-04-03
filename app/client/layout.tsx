"use client";

import { Toaster } from "react-hot-toast";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
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

      {/* Main wrapper */}
      <div className="flex flex-col min-h-screen">{children}</div>
    </div>
  );
}