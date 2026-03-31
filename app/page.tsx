// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { login } from "../lib/api/user";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   async function handleLogin() {
//     try {
//       const data = await login(email, password);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);
//       // ✅ Save to cookies so middleware can read them
//     document.cookie = `token=${data.token}; path=/;`;
//     document.cookie = `role=${data.role}; path=/;`;

//       if (data.role === "ADMIN") {
//         router.push("/dashboard");
//       } else {
//         alert("Access denied: Not an admin");
//       }
//     } catch {
//       alert("Login failed");
//     }
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-100 font-sans">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-200">
//         <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
//           Admin Login
//         </h1>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-800">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 text-sm font-medium text-gray-800">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md text-base"
//         >
//           Sign In
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../lib/api/user";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ Save to cookies so middleware can read them
      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `role=${data.role}; path=/;`;

      if (data.role === "ADMIN") {
        toast.success("Login successful! Redirecting...");
        router.push("/dashboard");
      } else {
        toast.error("Access denied: Not an admin");
      }
    } catch (err) {
      toast.error(`Login failed. ${err}.`);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-100 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Admin Login
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

