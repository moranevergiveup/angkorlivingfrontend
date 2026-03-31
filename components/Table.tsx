"use client";
import React from "react";

interface FieldConfig<T> {
  key: keyof T;
  label?: string;
  type?: "text" | "image" | "number" | "status" | "currency";
}

interface TableProps<T> {
  items: T[];
  fields: FieldConfig<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onResetPassword?: (item: T) => void;
}

export default function Table<T extends { id?: number }>({
  items,
  fields,
  onEdit,
  onDelete,
  onResetPassword,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-indigo-600">
          <tr>
            {fields.map((field) => (
              <th
                key={String(field.key)}
                className="px-4 py-3 text-left text-sm font-semibold text"
              >
                {field.label ?? String(field.key)}
              </th>
            ))}
            {(onEdit || onDelete || onResetPassword) && (
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {fields.map((field) => {
                const value = item[field.key];
                if (!value) return <td key={String(field.key)} className="px-4 py-2 text-gray-400">—</td>;

                switch (field.type) {
                  case "image":
                    return (
                      <td key={String(field.key)} className="px-4 py-2">
                        <img
                          src={String(value)}
                          alt={field.label ?? String(field.key)}
                          className="w-12 h-12 rounded-lg object-cover border"
                        />
                      </td>
                    );
                  case "currency":
                    return (
                      <td key={String(field.key)} className="px-4 py-2 text-green-600 font-semibold">
                        ${Number(value).toLocaleString()}
                      </td>
                    );
                  case "status":
                    return (
                      <td key={String(field.key)} className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            String(value).toLowerCase() === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {String(value)}
                        </span>
                      </td>
                    );
                  default:
                    return (
                      <td key={String(field.key)} className="px-4 py-2 text-gray-700">
                        {String(value)}
                      </td>
                    );
                }
              })}
              {(onEdit || onDelete || onResetPassword) && (
                <td className="px-4 py-2 flex gap-2">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(item)}
                      className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700"
                    >
                      ✏️ Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item)}
                      className="px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600"
                    >
                      🗑️ Delete
                    </button>
                  )}
                  {onResetPassword && (
                    <button
                      onClick={() => onResetPassword(item)}
                      className="px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700"
                    >
                       Reset Password
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
