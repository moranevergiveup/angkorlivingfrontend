// // export default function ProfilePage() {
// //   return (
// //     <main className="min-h-screen bg-gray-50 py-12 px-6">
// //       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
// //         {/* Header */}
// //         <div className="flex flex-col items-center mb-8">
// //           <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center shadow">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-12 w-12 text-orange-600"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// //               />
// //             </svg>
// //           </div>
// //           <h2 className="text-2xl font-bold text-orange-600 mt-4">My Profile</h2>
// //           <p className="text-gray-600">Manage your account and preferences</p>
// //         </div>

// //         {/* Profile Info */}
// //         <div className="space-y-4">
// //           <div className="flex justify-between border-b pb-2">
// //             <span className="text-gray-700 font-medium">Name</span>
// //             <span className="text-gray-500">John Doe</span>
// //           </div>
// //           <div className="flex justify-between border-b pb-2">
// //             <span className="text-gray-700 font-medium">Email</span>
// //             <span className="text-gray-500">john@example.com</span>
// //           </div>
// //           <div className="flex justify-between border-b pb-2">
// //             <span className="text-gray-700 font-medium">Phone</span>
// //             <span className="text-gray-500">+855 123 456 789</span>
// //           </div>
// //         </div>

// //         {/* Actions */}
// //         <div className="mt-8 flex justify-center gap-4">
// //           <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
// //             Edit Profile
// //           </button>
// //           <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// export default function ClientProfilePage() {
//   return (
//     <main className="min-h-screen bg-gray-100 py-12 px-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-center text-white">
//           <div className="flex justify-center mb-4">
//             <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
//               {/* Profile Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-12 w-12"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold">John Doe</h2>
//           <p className="text-sm">john@example.com</p>
//         </div>

//         {/* Content */}
//         <div className="p-8 space-y-8">
//           {/* Account Info */}
//           <section>
//             <h3 className="text-xl font-semibold text-orange-600 mb-4">Account Information</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700 font-medium">Phone</span>
//                 <span className="text-gray-500">+855 123 456 789</span>
//               </div>
//               <div className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700 font-medium">Member Since</span>
//                 <span className="text-gray-500">January 2024</span>
//               </div>
//             </div>
//           </section>

//           {/* Rental History */}
//           <section>
//             <h3 className="text-xl font-semibold text-green-600 mb-4">Rental History</h3>
//             <ul className="space-y-3">
//               <li className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700">Room 203</span>
//                 <span className="text-gray-500">Feb 2025 – Dec 2025</span>
//               </li>
//               <li className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700">Room 105</span>
//                 <span className="text-gray-500">Jan 2024 – Jan 2025</span>
//               </li>
//             </ul>
//           </section>

//           {/* Settings */}
//           <section>
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">Settings</h3>
//             <div className="flex gap-4">
//               <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
//                 Edit Profile
//               </button>
//               <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
//                 Logout
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }
// export default function ProfilePage() {
//   return (
//     <main className="min-h-screen bg-gray-100 py-12 px-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-center text-white">
//           <div className="flex justify-center mb-4">
//             <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
//               {/* Profile Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-12 w-12"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold">John Doe</h2>
//           <p className="text-sm">john@example.com</p>
//         </div>

//         {/* Content */}
//         <div className="p-8 space-y-8">
//           {/* Account Info */}
//           <section>
//             <h3 className="text-xl font-semibold text-orange-600 mb-4">Account Information</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700 font-medium">Phone</span>
//                 <span className="text-gray-500">+855 123 456 789</span>
//               </div>
//               <div className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700 font-medium">Member Since</span>
//                 <span className="text-gray-500">January 2024</span>
//               </div>
//             </div>
//           </section>

//           {/* Rental History */}
//           <section>
//             <h3 className="text-xl font-semibold text-green-600 mb-4">Rental History</h3>
//             <ul className="space-y-3">
//               <li className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700">Room 203</span>
//                 <span className="text-gray-500">Feb 2025 – Dec 2025</span>
//               </li>
//               <li className="flex justify-between border-b pb-2">
//                 <span className="text-gray-700">Room 105</span>
//                 <span className="text-gray-500">Jan 2024 – Jan 2025</span>
//               </li>
//             </ul>
//           </section>

//           {/* Settings */}
//           <section>
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">Settings</h3>
//             <div className="flex gap-4">
//               <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
//                 Edit Profile
//               </button>
//               <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
//                 Logout
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="text-sm">john@example.com</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Account Info */}
          <section>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Account Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700 font-medium">Phone</span>
                <span className="text-gray-500">+855 123 456 789</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700 font-medium">Member Since</span>
                <span className="text-gray-500">January 2024</span>
              </div>
            </div>
          </section>

          {/* Rental History */}
          <section>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Rental History</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Room 203</span>
                <span className="text-gray-500">Feb 2025 – Dec 2025</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Room 105</span>
                <span className="text-gray-500">Jan 2024 – Jan 2025</span>
              </li>
            </ul>
          </section>

          {/* Settings */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Settings</h3>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                Edit Profile
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
                Logout
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

