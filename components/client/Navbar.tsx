
// // // // // "use client";
// // // // // import { useState } from "react";

// // // // // export default function Navbar() {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   return (
// // // // //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// // // // //       {/* Logo + Brand Name */}
// // // // //       <div className="flex items-center gap-3">
// // // // //          <img
// // // // //             src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
// // // // //             alt="Angkor Living Logo"
// // // // //             className="h-18 sm:h-15 object-contain drop-shadow-lg"
// // // // //           />
// // // // //         <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
// // // // //       </div>

// // // // //       {/* Desktop Navigation */}
// // // // //       <div className="hidden md:flex space-x-8 font-medium">
// // // // //         <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // // // //         <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // // // //         <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
// // // // //       </div>

// // // // //       {/* Mobile Menu Button */}
// // // // //       <button
// // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // //         className="md:hidden text-gray-700 focus:outline-none"
// // // // //       >
// // // // //         {isOpen ? "✖" : "☰"}
// // // // //       </button>

// // // // //       {/* Mobile Navigation */}
// // // // //       {isOpen && (
// // // // //         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
// // // // //           <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // // // //           <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // // // //           <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState } from "react";

// // // // export default function Navbar() {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   return (
// // // //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// // // //       {/* Logo + Brand Name */}
// // // //       <div className="flex items-center gap-3">
// // // //         <img
// // // //           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
// // // //           alt="Angkor Living Logo"
// // // //           className="h-12 w-auto object-contain drop-shadow-lg"
// // // //         />
// // // //         <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
// // // //       </div>

// // // //       {/* Desktop Navigation */}
// // // //       <div className="hidden md:flex items-center space-x-8 font-medium">
// // // //         <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // // //         <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // // //         <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>

// // // //         {/* Profile Avatar */}
// // // //         <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
// // // //           <img
// // // //             src="https://i.pravatar.cc/40?img=3"  // Example avatar, replace with user profile image
// // // //             alt="Profile"
// // // //             className="h-10 w-10 rounded-full border border-gray-300"
// // // //           />
// // // //           <span className="text-gray-700 font-medium">Profile</span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu Button */}
// // // //       <button
// // // //         onClick={() => setIsOpen(!isOpen)}
// // // //         className="md:hidden text-gray-700 focus:outline-none"
// // // //       >
// // // //         {isOpen ? "✖" : "☰"}
// // // //       </button>

// // // //       {/* Mobile Navigation */}
// // // //       {isOpen && (
// // // //         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
// // // //           <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // // //           <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // // //           <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>

// // // //           {/* Profile in Mobile Menu */}
// // // //           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
// // // //             <img
// // // //               src="https://i.pravatar.cc/40?img=3"
// // // //               alt="Profile"
// // // //               className="h-10 w-10 rounded-full border border-gray-300"
// // // //             />
// // // //             <span className="text-gray-700 font-medium">Profile</span>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState } from "react";

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// // //       {/* Logo + Brand Name */}
// // //       <div className="flex items-center gap-3">
// // //         <img
// // //           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
// // //           alt="Angkor Living Logo"
// // //           className="h-12 w-auto object-contain drop-shadow-lg"
// // //         />
// // //         <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
// // //       </div>

// // //       {/* Desktop Navigation */}
// // //       <div className="hidden md:flex items-center space-x-8 font-medium">
// // //         <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // //         <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // //         <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>

// // //         {/* Profile Icon */}
// // //         <button className="flex items-center text-gray-700 hover:text-orange-600 transition">
// // //           {/* Simple user icon (SVG) */}
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             className="h-8 w-8"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //             strokeWidth={2}
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// // //             />
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu Button */}
// // //       <button
// // //         onClick={() => setIsOpen(!isOpen)}
// // //         className="md:hidden text-gray-700 focus:outline-none"
// // //       >
// // //         {isOpen ? "✖" : "☰"}
// // //       </button>

// // //       {/* Mobile Navigation */}
// // //       {isOpen && (
// // //         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
// // //           <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
// // //           <a href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</a>
// // //           <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>

// // //           {/* Profile Icon in Mobile Menu */}
// // //           <button className="flex items-center text-gray-700 hover:text-orange-600 transition">
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-8 w-8"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //               strokeWidth={2}
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// // //               />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// //       {/* Logo + Brand Name */}
// //       <div className="flex items-center gap-3">
// //         <img
// //           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
// //           alt="Angkor Living Logo"
// //           className="h-12 w-auto object-contain drop-shadow-lg"
// //         />
// //         <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
// //       </div>

// //       {/* Desktop Navigation */}
// //       <div className="hidden md:flex items-center space-x-8 font-medium">
// //         <Link href="/" className="text-gray-700 hover:text-orange-600 transition">Home</Link>
// //         <Link href="#rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</Link>
// //         <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>

// //         {/* Profile Icon */}
// //         <Link href="/client/profile" className="flex items-center text-gray-700 hover:text-orange-600 transition">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-8 w-8"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// //             />
// //           </svg>
// //         </Link>
// //       </div>

// //       {/* Mobile Menu Button */}
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="md:hidden text-gray-700 focus:outline-none"
// //       >
// //         {isOpen ? "✖" : "☰"}
// //       </button>

// //       {/* Mobile Navigation */}
// //       {isOpen && (
// //         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
// //           <Link href="/" className="text-gray-700 hover:text-orange-600 transition">Home</Link>
// //           <Link href="/rooms" className="text-gray-700 hover:text-green-600 transition">Rooms</Link>
// //           <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>

// //           {/* Profile Icon in Mobile Menu */}
// //           <Link href="/profile" className="flex items-center text-gray-700 hover:text-orange-600 transition">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-8 w-8"
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
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleProfileClick = () => {
//     if (isLoggedIn) {
//       router.push("/client/profile");
//     } else {
//       router.push("/login");
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
//       {/* Logo */}
//       <div className="flex items-center gap-3">
//         <img
//           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
//           alt="Angkor Living Logo"
//           className="h-12"
//         />
//         <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
//       </div>

//       {/* Desktop */}
//       <div className="hidden md:flex items-center space-x-8 font-medium">
//         <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
//         <Link href="#rooms" className="text-gray-700 hover:text-green-600">Rooms</Link>
//         <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

//         {/* Profile Icon */}
//         <button
//           onClick={handleProfileClick}
//           className="text-gray-700 hover:text-orange-600"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Button */}
//       <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//         {isOpen ? "✖" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden">
//           <Link href="/">Home</Link>
//           <Link href="/rooms">Rooms</Link>
//           <Link href="/contact">Contact</Link>

//           <button onClick={handleProfileClick}>
//             Profile
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push("/client/profile");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
          alt="Angkor Living Logo"
          className="h-12"
        />
        <h1 className="text-xl font-bold text-orange-600">Angkor Living</h1>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
        <Link href="#rooms" className="text-gray-700 hover:text-green-600">Rooms</Link>
        <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

        {/* Profile Icon */}
        <button
          onClick={handleProfileClick}
          className="text-gray-700 hover:text-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A9.003 9.003 0 0112 15c2.485 0 4.735.996 6.379 2.621M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/contact">Contact</Link>

          <button onClick={handleProfileClick}>
            Profile
          </button>
        </div>
      )}
    </nav>
  );
}