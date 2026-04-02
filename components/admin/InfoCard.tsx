"use client";

interface Field {
  label: string;
  value: string | null;
}

interface InfoCardProps {
  title: string;
  subtitle?: string;
  image?: string | null;
  fields: Field[];
}

export default function InfoCard({ title, subtitle, image, fields }: InfoCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 rounded-full border"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            {title.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm text-gray-700">
        {fields.map((f, i) => (
          <p key={i}>
            <strong>{f.label}:</strong> {f.value ?? "N/A"}
          </p>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Edit
        </button>
        <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
}
