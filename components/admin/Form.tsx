
// "use client";
// import React, { useState, useEffect } from "react";

// interface FormProps<T> {
//   initialValues: T;
//   fields: { key: keyof T; label: string; type?: string; readOnly?: boolean }[];
//   onSave: (values: T) => void;
//   onCancel: () => void;
//   isEdit?: boolean;
//   lastEntityName?: string;
//   defaultDescription?: string;
// }

// export default function Form<T>({
//   initialValues,
//   fields,
//   onSave,
//   onCancel,
//   isEdit = false,
//   lastEntityName,
//   defaultDescription,
// }: FormProps<T>) {
//   const [values, setValues] = useState<T>(initialValues);

//   // ✅ Auto-generate name + description when creating
//   useEffect(() => {
//     if (!isEdit && lastEntityName) {
//       const nextName = `Floor ${parseInt(lastEntityName.replace(/\D/g, "")) + 1}`;
//       setValues(prev => ({
//         ...prev,
//         ["name" as keyof T]: nextName,
//         ["description" as keyof T]: defaultDescription ?? "10 rooms",
//       }));
//     }
//   }, [isEdit, lastEntityName, defaultDescription]);

//   function handleSave() {
//     onSave(values);
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onCancel}
//       ></div>

//       {/* Modal */}
//       <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
//         <h2 className="text-2xl font-bold mb-6 text-indigo-700">
//           {isEdit ? "Update Floor" : "Create Floor"}
//         </h2>

//         {/* Fields */}
//         <div className="space-y-6">
//           {fields.map(({ key, label, type, readOnly }) => (
//             <div key={String(key)}>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 {label}
//               </label>
//               <input
//                 type={type ?? "text"}
//                 value={String(values[key] ?? "")}
//                 readOnly={readOnly}
//                 onChange={(e) =>
//                   !readOnly &&
//                   setValues(prev => ({
//                     ...prev,
//                     [key]:
//                       type === "number"
//                         ? Number(e.target.value)
//                         : e.target.value,
//                   }))
//                 }
//                 className={`w-full border rounded-xl px-3 py-2 text-gray-900 
//                             focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                             transition ${
//                               readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
//                             }`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end space-x-4 mt-8">
//           <button
//             onClick={onCancel}
//             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 
//                        text-white rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 
//                        focus:ring-2 focus:ring-indigo-400 transition"
//           >
//             {isEdit ? "Update" : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect } from "react";

// interface FieldConfig<T> {
//   key: keyof T;
//   label: string;
//   type?: "text" | "number" | "email" | "image";
//   readOnly?: boolean;
//    options?: { value: string; label: string }[];
// }

// interface FormProps<T> {
//   initialValues: T;
//   fields: FieldConfig<T>[];            // 👉 same structure as Card
//   onSave: (values: T) => void;
//   onCancel: () => void;
//   isEdit?: boolean;
//   lastEntityName?: string;
//   defaultDescription?: string;
// }

// export default function Form<T>({
//   initialValues,
//   fields,
//   onSave,
//   onCancel,
//   isEdit = false,
//   lastEntityName,
//   defaultDescription,
// }: FormProps<T>) {
//   const [values, setValues] = useState<T>(initialValues);

//   // ✅ Auto-generate name + description when creating
//   useEffect(() => {
//     if (!isEdit && lastEntityName) {
//       const nextName = `Floor ${parseInt(lastEntityName.replace(/\D/g, "")) + 1}`;
//       setValues(prev => ({
//         ...prev,
//         ["name" as keyof T]: nextName,
//         ["description" as keyof T]: defaultDescription ?? "10 rooms",
//       }));
//     }
//   }, [isEdit, lastEntityName, defaultDescription]);

//   function handleSave() {
//     onSave(values);
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onCancel}
//       ></div>

//       {/* Modal */}
//       <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
//         <h2 className="text-2xl font-bold mb-6 text-indigo-700">
//           {isEdit ? "Update Entity" : "Create Entity"}
//         </h2>

//         {/* Fields */}
//         <div className="space-y-6">
//           {fields.map(({ key, label, type, readOnly }) => (
//             <div key={String(key)}>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 {label}
//               </label>

//               {type === "image" ? (
//                 <input
//                   type="url"
//                   value={String(values[key] ?? "")}
//                   readOnly={readOnly}
//                   onChange={(e) =>
//                     !readOnly &&
//                     setValues(prev => ({
//                       ...prev,
//                       [key]: e.target.value as any,
//                     }))
//                   }
//                   placeholder="Image URL"
//                   className={`w-full border rounded-xl px-3 py-2 text-gray-900 
//                               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                               transition ${
//                                 readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
//                               }`}
//                 />
//               ) : (
//                 <input
//                   type={type ?? "text"}
//                   value={String(values[key] ?? "")}
//                   readOnly={readOnly}
//                   onChange={(e) =>
//                     !readOnly &&
//                     setValues(prev => ({
//                       ...prev,
//                       [key]:
//                         type === "number"
//                           ? Number(e.target.value)
//                           : e.target.value,
//                     }))
//                   }
//                  className={`w-full border rounded-xl px-3 py-2 text-gray-900 
//                               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                               transition ${
//                                 readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
//                               }`}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end space-x-4 mt-8">
//           <button
//             onClick={onCancel}
//             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 
//                        text-white rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 
//                        focus:ring-2 focus:ring-indigo-400 transition"
//           >
//             {isEdit ? "Update" : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";

interface FieldConfig<T> {
  key: keyof T;
  label: string;
  type?: "text" | "number" | "email" | "image" | "select" | "file";
  readOnly?: boolean;
  options?: { value: string; label: string }[]; // ✅ for select
   onChange?: (value: any) => void;
}

interface FormProps<T> {
  initialValues: T;
  fields: FieldConfig<T>[];
  onSave: (values: T) => void;
  onCancel: () => void;
  isEdit?: boolean;
  lastEntityName?: string;
  defaultDescription?: string;
  
}

export default function Form<T>({
  initialValues,
  fields,
  onSave,
  onCancel,
  isEdit = false,
  lastEntityName,
  defaultDescription,
}: FormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);

  // ✅ Auto-generate (for Floor, etc.)
  useEffect(() => {
    if (!isEdit && lastEntityName) {
      const nextName = `Floor ${
        parseInt(lastEntityName.replace(/\D/g, "")) + 1
      }`;

      setValues((prev) => ({
        ...prev,
        ["name" as keyof T]: nextName,
        ["description" as keyof T]: defaultDescription ?? "10 rooms",
      }));
    }
  }, [isEdit, lastEntityName, defaultDescription]);

  function handleSave() {
    onSave(values);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      ></div>

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          {isEdit ? "Update Entity" : "Create Entity"}
        </h2>

        {/* Fields */}
        <div className="space-y-6">
          {fields.map(({ key, label, type, readOnly, options }) => (
            <div key={String(key)}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
              </label>

              {/* ✅ SELECT (ComboBox) */}
              {type === "select" ? (
                <select
                  value={String(values[key] ?? "")}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      [key]: e.target.value as any,
                    }))
                  }
                  className="w-full border rounded-xl px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select...</option>
                  {options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : type === "file" ? (
                /* ✅ FILE INPUT */
                <input
                  type="file"
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      [key]: e.target.files?.[0] ?? null,
                    }))
                  }
                  className="w-full border rounded-xl px-3 py-2 text-gray-900"
                />
              ) : type === "image" ? (
                /* ✅ IMAGE URL */
                <input
                  type="url"
                  value={String(values[key] ?? "")}
                  readOnly={readOnly}
                  onChange={(e) =>
                    !readOnly &&
                    setValues((prev) => ({
                      ...prev,
                      [key]: e.target.value as any,
                    }))
                  }
                  placeholder="Image URL"
                  className={`w-full border rounded-xl px-3 py-2 text-gray-900 
                    focus:ring-2 focus:ring-indigo-500 transition ${
                      readOnly ? "bg-gray-100" : "bg-white"
                    }`}
                />
              ) : (
                /* ✅ DEFAULT INPUT */
                <input
                  type={type ?? "text"}
                  value={String(values[key] ?? "")}
                  readOnly={readOnly}
                  onChange={(e) =>
                    !readOnly &&
                    setValues((prev) => ({
                      ...prev,
                      [key]:
                        type === "number"
                          ? Number(e.target.value)
                          : e.target.value,
                    }))
                  }
                  className={`w-full border rounded-xl px-3 py-2 text-gray-900 
                    focus:ring-2 focus:ring-indigo-500 transition ${
                      readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700"
          >
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
