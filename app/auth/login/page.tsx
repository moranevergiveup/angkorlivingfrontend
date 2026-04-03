
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../../lib/api/user";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const data = await login(email, password);

      // Save token & role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `role=${data.role}; path=/;`;

      // Redirect based on role
      if (data.role === "ADMIN") {
        toast.success("Login successful! Redirecting to Dashboard...");
        router.push("/dashboard");
      } else if (data.role === "TENANT") {
        toast.success("Login successful! Redirecting to Home...");
        router.push("/");
      } else {
        toast.error("Access denied: Role not allowed");
      }
    } catch (err) {
      toast.error(`Login failed. ${err}`);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-100 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
            alt="Angkor Living Logo"
            className="h-40 w-auto object-contain drop-shadow-md"
          />
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-800">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md text-base"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
