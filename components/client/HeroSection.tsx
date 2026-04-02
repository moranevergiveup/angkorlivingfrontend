// // // export default function HeroSection() {
// // //   return (
// // //     <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
// // //       <h2 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Perfect Room</h2>
// // //       <p className="text-lg sm:text-xl mb-8 text-indigo-100">
// // //         Browse available rooms and start your rental journey today.
// // //       </p>
// // //       <a
// // //         href="#rooms"
// // //         className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
// // //       >
// // //         Explore Rooms
// // //       </a>
// // //     </section>
// // //   );
// // // }
// // export default function HeroSection() {
// //   return (
// //     <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
// //       {/* Logo */}
// //       <div className="mb-6 flex justify-center">
// //         <img
// //           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
// //           alt="Angkor Living Logo"
// //           className="h-24 sm:h-28 object-contain drop-shadow-lg"
// //         />
// //       </div>

// //       {/* Headline */}
// //       <h2 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Perfect Room</h2>
// //       <p className="text-lg sm:text-xl mb-8 text-indigo-100">
// //         Discover comfort, culture, and convenience with Angkor Living.
// //       </p>

// //       {/* CTA Button */}
// //       <a
// //         href="#rooms"
// //         className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
// //       >
// //         Explore Rooms
// //       </a>
// //     </section>
// //   );
// // }
// export default function HeroSection() {
//   return (
//     <section className="bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-500 text-gray-900 py-16 px-6 text-center">
//       {/* Logo */}
//       <div className="mb-6 flex justify-center">
//         <img
//           src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
//           alt="Angkor Living Logo"
//           className="h-24 sm:h-28 object-contain drop-shadow-lg"
//         />
//       </div>

//       {/* Headline */}
//       <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-brown-800">
//         Welcome to Angkor Living
//       </h2>
//       <p className="text-lg sm:text-xl mb-8 text-brown-700">
//         Experience comfort, culture, and convenience in every room.
//       </p>

//       {/* CTA Button */}
//       <a
//         href="#rooms"
//         className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
//       >
//         Explore Rooms
//       </a>
//     </section>
//   );
// }
export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 text-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151742/Angkor-Wat-temple-complex-Cambodia_dfutnq.webp')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="https://res.cloudinary.com/dz82bkh4t/image/upload/q_auto/f_auto/v1775151383/Copilot_20260403_003102-removebg-preview_brjl6p.png"
            alt="Angkor Living Logo"
            className="h-24 sm:h-28 object-contain drop-shadow-lg"
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Angkor Living
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-200 ">
          Experience comfort, culture, and convenience in every room.
        </p>

        {/* CTA Button */}
        <a
          href="#rooms"
          className="inline-block px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
}
