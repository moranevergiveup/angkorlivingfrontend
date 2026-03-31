// "use client";
// import Sidebar from "@/components/Sidebar";
// import { Toaster } from "react-hot-toast";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100 font-sans">
//       {/* Sidebar always visible */}
//       <Sidebar />

//       {/* Main content changes per page */}
//       <main className="flex-1 p-6">
//         {children}
//       </main>

//       {/* Global toaster for success/error messages */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             background: "#fff",
//             color: "#333",
//             borderRadius: "8px",
//             padding: "12px 16px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//           },
//           success: {
//             style: { background: "#4ade80", color: "#fff" }, // green
//           },
//           error: {
//             style: { background: "#f87171", color: "#fff" }, // red
//           },
//         }}
//       />
//     </div>
//   );
// }
"use client";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Main content changes per page */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Global toaster for success/error messages */}
      <Toaster
        position="top-center" // 👉 change from "top-right" to "top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
          success: {
            style: { background: "#4ade80", color: "#fff" }, // green
          },
          error: {
            style: { background: "#f87171", color: "#fff" }, // red
          },
        }}
      />
    </div>
  );
}
