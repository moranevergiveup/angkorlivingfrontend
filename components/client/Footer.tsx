export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="font-semibold text-orange-600">Angkor Living</p>
        <p className="text-sm text-gray-600">
          A welcoming rental platform blending modern comfort with Khmer-inspired design.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500 mt-2">
          <a href="/about" className="hover:text-orange-600 transition">About Us</a>
          <a href="/rooms" className="hover:text-green-600 transition">Rooms</a>
          <a href="/profile" className="hover:text-blue-600 transition">Profile</a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          © 2026 Angkor Living. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
