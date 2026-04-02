"use client";

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          window.location.href = "/auth/login";
        }}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </header>
  );
}
