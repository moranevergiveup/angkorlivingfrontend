

"use client";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/api/user";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return <p className="text-center mt-12 text-gray-500">Loading profile...</p>;
  if (!profile)
    return <p className="text-center mt-12 text-red-500">Profile not found</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white shadow-lg">
          {profile.profileImage ? (
            <img
              src={profile.profileImage}
              alt={profile.username}
              className="mx-auto h-28 w-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="mx-auto h-28 w-28 rounded-full bg-white/30 flex items-center justify-center shadow-lg border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
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
          )}
          <h2 className="text-3xl font-bold mt-4">{profile.username}</h2>
          <p className="text-sm text-white/90">{profile.email}</p>
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h3 className="text-xl font-semibold text-orange-600">Account Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Phone</span>
              <span className="text-gray-500">{profile.phone}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Member Since</span>
              <span className="text-gray-500">
                {new Date(profile.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Rental History */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-600">Rental History</h3>
          {profile.rentals?.length ? (
            profile.rentals.map((r: any) => (
              <div
                key={r.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
              >
                <div>
                  <p className="text-gray-700 font-medium">
                    Room {r.roomNumber}{" "}
                    {r.roomType && (
                      <span className="text-gray-500 font-normal">({r.roomType})</span>
                    )}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(r.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    –{" "}
                    {r.endDate
                      ? new Date(r.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "Present"}
                  </p>
                </div>
                <div className="flex gap-4 items-center mt-2 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      r.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : r.status === "COMPLETED"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {r.status}
                  </span>
                  {r.price && (
                    <span className="text-gray-600 font-medium">${r.price}</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No rentals yet.</p>
          )}
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-4 justify-end">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Edit Profile
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              window.location.href = "../auth/login";
            }}
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}