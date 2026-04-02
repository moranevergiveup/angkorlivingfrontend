export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-sm mt-2">We’d love to hear from you</p>
        </div>

        {/* Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-600">Reach Us</h3>
            <p className="text-gray-600">
              Have questions about rooms or bookings? Contact us directly.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                📧 Email: <a href="mailto:info@angkorliving.com" className="text-blue-600 hover:underline">info@angkorliving.com</a>
              </p>
              <p className="text-gray-700">
                📞 Phone: <a href="tel:+855123456789" className="text-blue-600 hover:underline">+855 123 456 789</a>
              </p>
              <p className="text-gray-700">
                📍 Address: Angkor Living, Phnom Penh, Cambodia
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              Map Location (Google Maps Embed)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
