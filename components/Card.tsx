

// "use client";
// import React from "react";

// interface FieldConfig<T> {
//   key: keyof T;
//   label?: string;
//   type?: "text" | "image" | "currency" | "status" | "date";
// }

// interface CardProps<T> {
//   item: T;
//   titleKey: keyof T;
//   fields: FieldConfig<T>[];
//   onEdit?: (item: T) => void;
//   onDelete?: (item: T) => void;
//   onResetPassword?: (item: T) => void;
// }

// export default function Card<T extends { id?: number }>({
//   item,
//   titleKey,
//   fields,
//   onEdit,
//   onDelete,
//   onResetPassword,
// }: CardProps<T>) {
//   return (
//     <div className="relative w-64 rounded-xl p-[1px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 
//                     hover:scale-[1.02] transition duration-300 ">

//       <div className="bg-white/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-sm border border-white/40">

//         {/* Image */}
//         {fields.map((field) => {
//           if (field.type === "image") {
//             const value = item[field.key];
//             if (!value) return null;

//             return (
//               <div key={String(field.key)} className="h-28 w-full overflow-hidden">
//                 <img
//                   src={String(value)}
//                   alt={field.label ?? ""}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           }
//           return null;
//         })}

//         <div className="p-3">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="text-sm font-semibold text-gray-900 truncate">
//               {String(item[titleKey])}
//             </h3>
//             {item.id && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
//                 #{item.id}
//               </span>
//             )}
//           </div>

//           {/* Fields */}
//           <div className="space-y-1 text-xs">
//             {fields.map((field) => {
//               if (field.type === "image") return null;
//               const value = item[field.key];
//               if (value === null || value === undefined) return null;

//               switch (field.type) {
//                 case "currency":
//                   return (
//                     <div key={String(field.key)} className="flex justify-between">
//                       <span className="text-gray-500">{field.label}</span>
//                       <span className="font-semibold text-emerald-600">
//                         ${Number(value).toLocaleString()}
//                       </span>
//                     </div>
//                   );
//                 case "status":
//                   const status = String(value).toLowerCase();
//                   return (
//                     <div key={String(field.key)} className="flex justify-between">
//                       <span className="text-gray-500">{field.label}</span>
//                       <span
//                         className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${
//                           status === "available"
//                             ? "bg-emerald-100 text-emerald-700"
//                             : status === "paid"
//                             ? "bg-blue-100 text-blue-700"
//                             : status === "pending"
//                             ? "bg-amber-100 text-amber-700"
//                             : "bg-rose-100 text-rose-700"
//                         }`}
//                       >
//                         {String(value)}
//                       </span>
//                     </div>
//                   );
//                 case "date":
//                   return (
//                     <div key={String(field.key)} className="flex justify-between">
//                       <span className="text-gray-500">{field.label}</span>
//                       <span className="text-gray-700">
//                         {new Date(String(value)).toLocaleDateString()}
//                       </span>
//                     </div>
//                   );
//                 default:
//                   return (
//                     <div key={String(field.key)} className="flex justify-between">
//                       <span className="text-gray-500">{field.label}</span>
//                       <span className="text-gray-800 font-medium truncate max-w-[110px] text-right">
//                         {String(value)}
//                       </span>
//                     </div>
//                   );
//               }
//             })}
//           </div>
//         </div>

//         {/* Actions */}
//         {(onEdit || onDelete || onResetPassword) && (
//           <div className="flex justify-end gap-2 px-3 py-2 border-t bg-white/60 backdrop-blur">
//             {onEdit && (
//               <button
//                 onClick={() => onEdit(item)}
//                 className="px-2 py-1 text-xs rounded bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Edit
//               </button>
//             )}
//             {onDelete && (
//               <button
//                 onClick={() => onDelete(item)}
//                 className="px-2 py-1 text-xs rounded bg-rose-500 text-white hover:bg-rose-600"
//               >
//                 Delete
//               </button>
//             )}
//             {onResetPassword && (
//               <button
//                 onClick={() => onResetPassword(item)}
//                 className="px-2 py-1 text-xs rounded bg-emerald-600 text-white hover:bg-emerald-700"
//               >
//                 Pay
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";

interface FieldConfig<T> {
  key: keyof T;
  label?: string;
  type?: "text" | "image" | "currency" | "status" | "date";
}

interface CardProps<T> {
  item: T;
  titleKey: keyof T;
  fields: FieldConfig<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onResetPassword?: (item: T) => void;
}

export default function Card<T extends { id?: number }>({
  item,
  titleKey,
  fields,
  onEdit,
  onDelete,
  onResetPassword,
}: CardProps<T>) {
  // Status colors map
  const statusColorMap: Record<string, string> = {
    available: "bg-emerald-100 text-emerald-700",
    paid: "bg-blue-100 text-blue-700",
    pending: "bg-amber-100 text-amber-700",
    rented: "bg-purple-100 text-purple-700",
    active: "bg-teal-100 text-teal-700",
  };

  return (
    <div className="relative w-64 rounded-xl p-[1px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 
                    hover:scale-[1.02] transition duration-300">
      <div className="bg-white/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-sm border border-white/40">

        {/* Image */}
        {fields.map((field) => {
          if (field.type === "image") {
            const value = item[field.key];
            if (!value) return null;

            return (
              <div key={String(field.key)} className="h-28 w-full overflow-hidden">
                <img
                  src={String(value)}
                  alt={field.label ?? ""}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          }
          return null;
        })}

        <div className="p-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {String(item[titleKey])}
            </h3>
            {item.id && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                #{item.id}
              </span>
            )}
          </div>

          {/* Fields */}
          <div className="space-y-1 text-xs">
            {fields.map((field) => {
              if (field.type === "image") return null;

              const value = item[field.key];
              if (value === null || value === undefined) return null;

              switch (field.type) {
                case "currency":
                  return (
                    <div key={String(field.key)} className="flex justify-between">
                      <span className="text-gray-500">{field.label}</span>
                      <span className="font-semibold text-emerald-600">
                        ${Number(value).toLocaleString()}
                      </span>
                    </div>
                  );

                case "status":
                  const status = String(value).toLowerCase();
                  const statusClasses = statusColorMap[status] ?? "bg-rose-100 text-rose-700";
                  return (
                    <div key={String(field.key)} className="flex justify-between">
                      <span className="text-gray-500">{field.label}</span>
                      <span
                        className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${statusClasses}`}
                      >
                        {String(value)}
                      </span>
                    </div>
                  );

                case "date":
                  return (
                    <div key={String(field.key)} className="flex justify-between">
                      <span className="text-gray-500">{field.label}</span>
                      <span className="text-gray-700">
                        {new Date(String(value)).toLocaleDateString()}
                      </span>
                    </div>
                  );

                default:
                  return (
                    <div key={String(field.key)} className="flex justify-between">
                      <span className="text-gray-500">{field.label}</span>
                      <span className="text-gray-800 font-medium truncate max-w-[110px] text-right">
                        {String(value)}
                      </span>
                    </div>
                  );
              }
            })}
          </div>
        </div>

        {/* Actions */}
        {(onEdit || onDelete || onResetPassword) && (
          <div className="flex justify-end gap-2 px-3 py-2 border-t bg-white/60 backdrop-blur">
            {onEdit && (
              <button
                onClick={() => onEdit(item)}
                className="px-2 py-1 text-xs rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(item)}
                className="px-2 py-1 text-xs rounded bg-rose-500 text-white hover:bg-rose-600"
              >
                Delete
              </button>
            )}
            {onResetPassword && (
              <button
                onClick={() => onResetPassword(item)}
                className="px-2 py-1 text-xs rounded bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Pay
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}