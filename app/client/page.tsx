// // // // "use client";
// // // // import { useEffect, useState } from "react";
// // // // import { getRooms } from "@/lib/api/room";
// // // // import { Room } from "@/lib/types/room";
// // // // import toast from "react-hot-toast";

// // // // export default function RentalHomePage() {
// // // //   const [rooms, setRooms] = useState<Room[]>([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     const loadRooms = async () => {
// // // //       try {
// // // //         const data = await getRooms();
// // // //         setRooms(data);
// // // //       } catch {
// // // //         setError("Failed to load rooms");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     loadRooms();
// // // //   }, []);

// // // //   const filteredRooms = selectedFloor
// // // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // // //     : rooms;

// // // //   if (loading) return <p className="p-6">Loading available rooms...</p>;
// // // //   if (error) return <p className="p-6 text-red-600">{error}</p>;

// // // //   return (
// // // //     <div className="p-6">
// // // //       {/* Hero Section */}
// // // //       <div className="mb-8 text-center">
// // // //         <h1 className="text-4xl font-bold text-indigo-700 mb-2">
// // // //           Find Your Perfect Room
// // // //         </h1>
// // // //         <p className="text-gray-600">
// // // //           Browse available rooms and start your rental journey today.
// // // //         </p>
// // // //       </div>

// // // //       {/* Floor Filter */}
// // // //       <div className="flex gap-3 mb-6 flex-wrap justify-center">
// // // //         <button
// // // //           onClick={() => setSelectedFloor(null)}
// // // //           className={`px-4 py-2 rounded-lg border ${
// // // //             selectedFloor === null
// // // //               ? "bg-indigo-600 text-white"
// // // //               : "bg-white hover:bg-gray-100"
// // // //           }`}
// // // //         >
// // // //           All Floors
// // // //         </button>
// // // //         {[...new Set(rooms.map((r) => r.floorName))].map((floor) => (
// // // //           <button
// // // //             key={floor}
// // // //             onClick={() => setSelectedFloor(floor)}
// // // //             className={`px-4 py-2 rounded-lg border ${
// // // //               selectedFloor === floor
// // // //                 ? "bg-indigo-600 text-white"
// // // //                 : "bg-white hover:bg-gray-100"
// // // //             }`}
// // // //           >
// // // //             {floor}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {/* Rooms Grid */}
// // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {filteredRooms.length > 0 ? (
// // // //           filteredRooms.map((room) => (
// // // //             <li
// // // //               key={room.id}
// // // //               className="border rounded-xl shadow-md overflow-hidden bg-white"
// // // //             >
// // // //               {room.imageUrl && (
// // // //                 <img
// // // //                   src={room.imageUrl}
// // // //                   alt={`Room ${room.roomNumber}`}
// // // //                   className="w-full h-40 object-cover"
// // // //                 />
// // // //               )}
// // // //               <div className="p-4">
// // // //                 <h2 className="text-lg font-semibold text-indigo-700">
// // // //                   Room {room.roomNumber}
// // // //                 </h2>
// // // //                 <p className="text-sm text-gray-600">
// // // //                   Floor: {room.floorName}
// // // //                 </p>
// // // //                 <p className="text-sm text-gray-600">
// // // //                   Price: ${room.price.toFixed(2)}
// // // //                 </p>
// // // //                 <p
// // // //                   className={`text-sm font-medium mt-1 ${
// // // //                     room.status === "ACTIVE"
// // // //                       ? "text-green-600"
// // // //                       : "text-red-500"
// // // //                   }`}
// // // //                 >
// // // //                   {room.status}
// // // //                 </p>

// // // //                 {room.status === "ACTIVE" ? (
// // // //                   <button
// // // //                     onClick={() =>
// // // //                       toast.success(`Booking started for Room ${room.roomNumber}`)
// // // //                     }
// // // //                     className="mt-3 w-full px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
// // // //                   >
// // // //                     Rent Now
// // // //                   </button>
// // // //                 ) : (
// // // //                   <p className="mt-3 text-sm text-gray-500 text-center">
// // // //                     Currently Rented
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </li>
// // // //           ))
// // // //         ) : (
// // // //           <p className="text-gray-500 text-center col-span-full">
// // // //             No rooms available.
// // // //           </p>
// // // //         )}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useEffect, useState } from "react";
// // // import { getRooms } from "@/lib/api/room";
// // // import { Room } from "@/lib/types/room";
// // // import toast from "react-hot-toast";

// // // export default function RentalHomePage() {
// // //   const [rooms, setRooms] = useState<Room[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     const loadRooms = async () => {
// // //       try {
// // //         const data = await getRooms();
// // //         setRooms(data);
// // //       } catch {
// // //         setError("Failed to load rooms");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     loadRooms();
// // //   }, []);

// // //   const filteredRooms = selectedFloor
// // //     ? rooms.filter((r) => r.floorName === selectedFloor)
// // //     : rooms;

// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       {/* Navbar */}
// // //       <nav className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow">
// // //         <h1 className="text-xl font-bold">🏠 Room Rental</h1>
// // //         <div className="space-x-6">
// // //           <a href="#" className="hover:text-indigo-200">Home</a>
// // //           <a href="#rooms" className="hover:text-indigo-200">Rooms</a>
// // //           <a href="#contact" className="hover:text-indigo-200">Contact</a>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
// // //         <h2 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Perfect Room</h2>
// // //         <p className="text-lg sm:text-xl mb-8 text-indigo-100">
// // //           Browse available rooms and start your rental journey today.
// // //         </p>
// // //         <a href="#rooms" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition">
// // //           Explore Rooms
// // //         </a>
// // //       </section>

// // //       {/* Rental Section */}
// // //       <main id="rooms" className="flex-1 p-6">
// // //         <h3 className="text-2xl font-bold mb-6 text-indigo-700">Available Rooms</h3>

// // //         {/* Floor Filter */}
// // //         <div className="flex gap-3 mb-6 flex-wrap">
// // //           <button
// // //             onClick={() => setSelectedFloor(null)}
// // //             className={`px-4 py-2 rounded-lg border ${selectedFloor === null ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
// // //           >
// // //             All Floors
// // //           </button>
// // //           {[...new Set(rooms.map((r) => r.floorName))].map((floor) => (
// // //             <button
// // //               key={floor}
// // //               onClick={() => setSelectedFloor(floor)}
// // //               className={`px-4 py-2 rounded-lg border ${selectedFloor === floor ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
// // //             >
// // //               {floor}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Rooms Grid */}
// // //         {loading ? (
// // //           <p>Loading rooms...</p>
// // //         ) : error ? (
// // //           <p className="text-red-600">{error}</p>
// // //         ) : (
// // //           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filteredRooms.length > 0 ? (
// // //               filteredRooms.map((room) => (
// // //                 <li key={room.id} className="border rounded-xl shadow-md overflow-hidden bg-white">
// // //                   {room.imageUrl && (
// // //                     <img src={room.imageUrl} alt={`Room ${room.roomNumber}`} className="w-full h-40 object-cover" />
// // //                   )}
// // //                   <div className="p-4">
// // //                     <h4 className="text-lg font-semibold text-indigo-700">Room {room.roomNumber}</h4>
// // //                     <p className="text-sm text-gray-600">Floor: {room.floorName}</p>
// // //                     <p className="text-sm text-gray-600">Price: ${room.price.toFixed(2)}</p>
// // //                     <p className={`text-sm font-medium mt-1 ${room.status === "ACTIVE" ? "text-green-600" : "text-red-500"}`}>
// // //                       {room.status}
// // //                     </p>
// // //                     {room.status === "ACTIVE" ? (
// // //                       <button
// // //                         onClick={() => toast.success(`Booking started for Room ${room.roomNumber}`)}
// // //                         className="mt-3 w-full px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
// // //                       >
// // //                         Rent Now
// // //                       </button>
// // //                     ) : (
// // //                       <p className="mt-3 text-sm text-gray-500 text-center">Currently Rented</p>
// // //                     )}
// // //                   </div>
// // //                 </li>
// // //               ))
// // //             ) : (
// // //               <p className="text-gray-500">No rooms available.</p>
// // //             )}
// // //           </ul>
// // //         )}
// // //       </main>

// // //       {/* Footer */}
// // //       <footer id="contact" className="bg-gray-100 text-gray-700 py-6 px-6 text-center mt-10">
// // //         <p className="mb-2">📞 Contact us: +855 12 345 678</p>
// // //         <p className="mb-2">📧 Email: info@roomrental.com</p>
// // //         <p className="text-sm text-gray-500">© 2026 Room Rental. All rights reserved.</p>
// // //       </footer>
// // //     </div>
// // //   );
// // // }
// // import Navbar from "@/components/client/Navbar";
// // import HeroSection from "@/components/client/HeroSection";
// // import RentalSection from "@/components/client/RentalSection";
// // import Footer from "@/components/client/Footer";

// // export default function RentalHomePage() {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Navbar />
// //       <HeroSection />
// //       <RentalSection />
// //       <Footer />
// //     </div>
// //   );
// // }
// import HeroSection from "@/components/client/HeroSection";
// import RentalSection from "@/components/client/RentalSection";

// export default function HomePage() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Rental Section */}
//       <RentalSection />

//       {/* Contact Section */}
//       <section id="contact" className="bg-white py-16 px-6 text-center">
//         <h3 className="text-3xl font-bold text-orange-600 mb-4">Get in Touch</h3>
//         <p className="text-gray-600 mb-8">
//           Have questions or want to book a room? Reach out to us today.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a
//             href="mailto:info@angkorliving.com"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Email Us
//           </a>
//           <a
//             href="tel:+855123456789"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Call Us
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }
import Navbar from "@/components/client/Navbar";
import HeroSection from "@/components/client/HeroSection";
import RentalSection from "@/components/client/RentalSection";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <HeroSection />

      {/* Rental Section */}
      <RentalSection />

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          Have questions or want to book a room? Reach out to us today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@angkorliving.com"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Email Us
          </a>
          <a
            href="tel:+855123456789"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Call Us
          </a>
        </div>
      </section>
    </>
  );
}
