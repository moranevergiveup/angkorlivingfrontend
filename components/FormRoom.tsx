// // // // // // // // // // "use client";
// // // // // // // // // // import React, { useState } from "react";

// // // // // // // // // // interface FieldConfig<T> {
// // // // // // // // // //   key: keyof T;
// // // // // // // // // //   label: string;
// // // // // // // // // //   type?: "text" | "number" | "select" | "image";
// // // // // // // // // //   readOnly?: boolean;
// // // // // // // // // //   options?: { value: string; label: string }[]; // ✅ for combo box
// // // // // // // // // // }

// // // // // // // // // // interface FormProps<T> {
// // // // // // // // // //   initialValues: T;
// // // // // // // // // //   fields: FieldConfig<T>[];
// // // // // // // // // //   onSave: (values: T) => void;
// // // // // // // // // //   onCancel: () => void;
// // // // // // // // // //   isEdit?: boolean;
// // // // // // // // // // }

// // // // // // // // // // export default function Form<T>({
// // // // // // // // // //   initialValues,
// // // // // // // // // //   fields,
// // // // // // // // // //   onSave,
// // // // // // // // // //   onCancel,
// // // // // // // // // //   isEdit = false,
// // // // // // // // // // }: FormProps<T>) {
// // // // // // // // // //   const [values, setValues] = useState<T>(initialValues);

// // // // // // // // // //   function handleSave() {
// // // // // // // // // //     onSave(values);
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // // // // // // //       {/* Overlay */}
// // // // // // // // // //       <div
// // // // // // // // // //         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// // // // // // // // // //         onClick={onCancel}
// // // // // // // // // //       ></div>

// // // // // // // // // //       {/* Modal */}
// // // // // // // // // //       <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
// // // // // // // // // //         <h2 className="text-2xl font-bold mb-6 text-indigo-700">
// // // // // // // // // //           {isEdit ? "Update Room" : "Create Room"}
// // // // // // // // // //         </h2>

// // // // // // // // // //         {/* Fields */}
// // // // // // // // // //         <div className="space-y-6">
// // // // // // // // // //           {fields.map(({ key, label, type, readOnly, options }) => (
// // // // // // // // // //             <div key={String(key)}>
// // // // // // // // // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // // // // // // // // //                 {label}
// // // // // // // // // //               </label>

// // // // // // // // // //               {type === "select" ? (
// // // // // // // // // //                 <select
// // // // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // // // //                   onChange={(e) =>
// // // // // // // // // //                     setValues(prev => ({
// // // // // // // // // //                       ...prev,
// // // // // // // // // //                       [key]: e.target.value as any,
// // // // // // // // // //                     }))
// // // // // // // // // //                   }
// // // // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // // // //                 >
// // // // // // // // // //                   <option value="">Select...</option>
// // // // // // // // // //                   {options?.map(opt => (
// // // // // // // // // //                     <option key={opt.value} value={opt.value}>
// // // // // // // // // //                       {opt.label}
// // // // // // // // // //                     </option>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </select>
// // // // // // // // // //               ) : type === "image" ? (
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="file"
// // // // // // // // // //                   accept="image/*"
// // // // // // // // // //                   onChange={(e) =>
// // // // // // // // // //                     setValues(prev => ({
// // // // // // // // // //                       ...prev,
// // // // // // // // // //                       [key]: e.target.files?.[0] ?? null,
// // // // // // // // // //                     }))
// // // // // // // // // //                   }
// // // // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // // // //                 />
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <input
// // // // // // // // // //                   type={type ?? "text"}
// // // // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // // // //                   readOnly={readOnly}
// // // // // // // // // //                   onChange={(e) =>
// // // // // // // // // //                     !readOnly &&
// // // // // // // // // //                     setValues(prev => ({
// // // // // // // // // //                       ...prev,
// // // // // // // // // //                       [key]:
// // // // // // // // // //                         type === "number"
// // // // // // // // // //                           ? Number(e.target.value)
// // // // // // // // // //                           : e.target.value,
// // // // // // // // // //                     }))
// // // // // // // // // //                   }
// // // // // // // // // //                   className={`w-full border rounded-xl px-3 py-2 ${
// // // // // // // // // //                     readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
// // // // // // // // // //                   }`}
// // // // // // // // // //                 />
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Actions */}
// // // // // // // // // //         <div className="flex justify-end space-x-4 mt-8">
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={onCancel}
// // // // // // // // // //             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
// // // // // // // // // //           >
// // // // // // // // // //             Cancel
// // // // // // // // // //           </button>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={handleSave}
// // // // // // // // // //             className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// // // // // // // // // //           >
// // // // // // // // // //             {isEdit ? "Update" : "Save"}
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";
// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { Room } from "@/lib/types/room";

// // // // // // // // // interface FieldConfig<T> {
// // // // // // // // //   key: keyof T;
// // // // // // // // //   label: string;
// // // // // // // // //   type?: "text" | "number" | "select" | "image";
// // // // // // // // //   readOnly?: boolean;
// // // // // // // // //   options?: { value: string; label: string }[];
// // // // // // // // // }

// // // // // // // // // interface FormProps<T> {
// // // // // // // // //   initialValues: T;
// // // // // // // // //   fields: FieldConfig<T>[];
// // // // // // // // //   onSave: (values: T) => void;
// // // // // // // // //   onCancel: () => void;
// // // // // // // // //   isEdit?: boolean;
// // // // // // // // //   rooms?: Room[]; // ✅ pass all rooms for auto-generate
// // // // // // // // // }

// // // // // // // // // export default function Form<T>({
// // // // // // // // //   initialValues,
// // // // // // // // //   fields,
// // // // // // // // //   onSave,
// // // // // // // // //   onCancel,
// // // // // // // // //   isEdit = false,
// // // // // // // // //   rooms = [],
// // // // // // // // // }: FormProps<T>) {
// // // // // // // // //   const [values, setValues] = useState<T>(initialValues);

// // // // // // // // //   // ✅ Auto-generate Room Number when floorId changes
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const floorId = Number(values["floorId" as keyof T]);
// // // // // // // // //     if (!floorId) return;

// // // // // // // // //     const floorRooms = rooms.filter(r => r.floorId === floorId);
// // // // // // // // //     if (floorRooms.length > 0) {
// // // // // // // // //       const lastRoom = floorRooms
// // // // // // // // //         .map(r => parseInt(r.roomNumber))
// // // // // // // // //         .filter(n => !isNaN(n))
// // // // // // // // //         .sort((a, b) => b - a)[0];
// // // // // // // // //       setValues(prev => ({
// // // // // // // // //         ...prev,
// // // // // // // // //         ["roomNumber" as keyof T]: String(lastRoom + 1),
// // // // // // // // //       }));
// // // // // // // // //     } else {
// // // // // // // // //       setValues(prev => ({
// // // // // // // // //         ...prev,
// // // // // // // // //         ["roomNumber" as keyof T]: String(floorId * 100 + 1),
// // // // // // // // //       }));
// // // // // // // // //     }
// // // // // // // // //   }, [values["floorId" as keyof T], rooms]);

// // // // // // // // //   function handleSave() {
// // // // // // // // //     onSave(values);
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // // // // // //       <div
// // // // // // // // //         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// // // // // // // // //         onClick={onCancel}
// // // // // // // // //       ></div>

// // // // // // // // //       <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
// // // // // // // // //         <h2 className="text-2xl font-bold mb-6 text-indigo-700">
// // // // // // // // //           {isEdit ? "Update Room" : "Create Room"}
// // // // // // // // //         </h2>

// // // // // // // // //         <div className="space-y-6">
// // // // // // // // //           {fields.map(({ key, label, type, readOnly, options }) => (
// // // // // // // // //             <div key={String(key)}>
// // // // // // // // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // // // // // // // //                 {label}
// // // // // // // // //               </label>

// // // // // // // // //               {type === "select" ? (
// // // // // // // // //                 <select
// // // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setValues(prev => ({
// // // // // // // // //                       ...prev,
// // // // // // // // //                       [key]: e.target.value as any,
// // // // // // // // //                     }))
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // // //                 >
// // // // // // // // //                   <option value="">Select...</option>
// // // // // // // // //                   {options?.map(opt => (
// // // // // // // // //                     <option key={opt.value} value={opt.value}>
// // // // // // // // //                       {opt.label}
// // // // // // // // //                     </option>
// // // // // // // // //                   ))}
// // // // // // // // //                 </select>
// // // // // // // // //               ) : type === "image" ? (
// // // // // // // // //                 <input
// // // // // // // // //                   type="file"
// // // // // // // // //                   accept="image/*"
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setValues(prev => ({
// // // // // // // // //                       ...prev,
// // // // // // // // //                       [key]: e.target.files?.[0] ?? null,
// // // // // // // // //                     }))
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // // //                 />
// // // // // // // // //               ) : (
// // // // // // // // //                 <input
// // // // // // // // //                   type={type ?? "text"}
// // // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // // //                   readOnly={readOnly}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     !readOnly &&
// // // // // // // // //                     setValues(prev => ({
// // // // // // // // //                       ...prev,
// // // // // // // // //                       [key]:
// // // // // // // // //                         type === "number"
// // // // // // // // //                           ? Number(e.target.value)
// // // // // // // // //                           : e.target.value,
// // // // // // // // //                     }))
// // // // // // // // //                   }
// // // // // // // // //                   className={`w-full border rounded-xl px-3 py-2 ${
// // // // // // // // //                     readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
// // // // // // // // //                   }`}
// // // // // // // // //                 />
// // // // // // // // //               )}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex justify-end space-x-4 mt-8">
// // // // // // // // //           <button
// // // // // // // // //             onClick={onCancel}
// // // // // // // // //             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
// // // // // // // // //           >
// // // // // // // // //             Cancel
// // // // // // // // //           </button>
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleSave}
// // // // // // // // //             className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// // // // // // // // //           >
// // // // // // // // //             {isEdit ? "Update" : "Save"}
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";
// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { Room } from "@/lib/types/room";

// // // // // // // // interface FieldConfig<T> {
// // // // // // // //   key: keyof T;
// // // // // // // //   label: string;
// // // // // // // //   type?: "text" | "number" | "select" | "image";
// // // // // // // //   readOnly?: boolean;
// // // // // // // //   options?: { value: string; label: string }[];
// // // // // // // // }

// // // // // // // // interface FormProps<T> {
// // // // // // // //   initialValues: T;
// // // // // // // //   fields: FieldConfig<T>[];
// // // // // // // //   onSave: (values: T) => void;
// // // // // // // //   onCancel: () => void;
// // // // // // // //   isEdit?: boolean;
// // // // // // // //   rooms?: Room[]; // ✅ pass all rooms for auto-generate
// // // // // // // // }

// // // // // // // // export default function Form<T>({
// // // // // // // //   initialValues,
// // // // // // // //   fields,
// // // // // // // //   onSave,
// // // // // // // //   onCancel,
// // // // // // // //   isEdit = false,
// // // // // // // //   rooms = [],
// // // // // // // // }: FormProps<T>) {
// // // // // // // //   const [values, setValues] = useState<T>(initialValues);

// // // // // // // //   // ✅ Auto-generate Room Number when floorId changes
// // // // // // // //   useEffect(() => {
// // // // // // // //     const FlorName = Number(values["floorId" as keyof T]);
// // // // // // // //     if (!floorId) return;

// // // // // // // //     const floorRooms = rooms.filter(r => r.floorName === floorName);
// // // // // // // //     if (floorRooms.length > 0) {
// // // // // // // //       const lastRoom = floorRooms
// // // // // // // //         .map(r => parseInt(r.roomNumber))
// // // // // // // //         .filter(n => !isNaN(n))
// // // // // // // //         .sort((a, b) => b - a)[0];
// // // // // // // //       setValues(prev => ({
// // // // // // // //         ...prev,
// // // // // // // //         ["roomNumber" as keyof T]: String(lastRoom + 1),
// // // // // // // //       }));
// // // // // // // //     } else {
// // // // // // // //       setValues(prev => ({
// // // // // // // //         ...prev,
// // // // // // // //         ["roomNumber" as keyof T]: String(floorId * 100 + 1),
// // // // // // // //       }));
// // // // // // // //     }
// // // // // // // //   }, [values["floorId" as keyof T], rooms]);

// // // // // // // //   function handleSave() {
// // // // // // // //     onSave(values);
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // // // // //       <div
// // // // // // // //         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// // // // // // // //         onClick={onCancel}
// // // // // // // //       ></div>

// // // // // // // //       <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-[480px] animate-fadeIn">
// // // // // // // //         <h2 className="text-2xl font-bold mb-6 text-indigo-700">
// // // // // // // //           {isEdit ? "Update Room" : "Create Room"}
// // // // // // // //         </h2>

// // // // // // // //         <div className="space-y-6">
// // // // // // // //           {fields.map(({ key, label, type, readOnly, options }) => (
// // // // // // // //             <div key={String(key)}>
// // // // // // // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // // // // // // //                 {label}
// // // // // // // //               </label>

// // // // // // // //               {type === "select" ? (
// // // // // // // //                 <select
// // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setValues(prev => ({
// // // // // // // //                       ...prev,
// // // // // // // //                       [key]: e.target.value as any,
// // // // // // // //                     }))
// // // // // // // //                   }
// // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // //                 >
// // // // // // // //                   <option value="">Select...</option>
// // // // // // // //                   {options?.map(opt => (
// // // // // // // //                     <option key={opt.value} value={opt.value}>
// // // // // // // //                       {opt.label}
// // // // // // // //                     </option>
// // // // // // // //                   ))}
// // // // // // // //                 </select>
// // // // // // // //               ) : type === "image" ? (
// // // // // // // //                 <input
// // // // // // // //                   type="file"
// // // // // // // //                   accept="image/*"
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setValues(prev => ({
// // // // // // // //                       ...prev,
// // // // // // // //                       [key]: e.target.files?.[0] ?? null,
// // // // // // // //                     }))
// // // // // // // //                   }
// // // // // // // //                   className="w-full border rounded-xl px-3 py-2"
// // // // // // // //                 />
// // // // // // // //               ) : (
// // // // // // // //                 <input
// // // // // // // //                   type={type ?? "text"}
// // // // // // // //                   value={String(values[key] ?? "")}
// // // // // // // //                   readOnly={readOnly}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     !readOnly &&
// // // // // // // //                     setValues(prev => ({
// // // // // // // //                       ...prev,
// // // // // // // //                       [key]:
// // // // // // // //                         type === "number"
// // // // // // // //                           ? Number(e.target.value)
// // // // // // // //                           : e.target.value,
// // // // // // // //                     }))
// // // // // // // //                   }
// // // // // // // //                   className={`w-full border rounded-xl px-3 py-2 ${
// // // // // // // //                     readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
// // // // // // // //                   }`}
// // // // // // // //                 />
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         <div className="flex justify-end space-x-4 mt-8">
// // // // // // // //           <button
// // // // // // // //             onClick={onCancel}
// // // // // // // //             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
// // // // // // // //           >
// // // // // // // //             Cancel
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             onClick={handleSave}
// // // // // // // //             className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// // // // // // // //           >
// // // // // // // //             {isEdit ? "Update" : "Save"}
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { Room } from "@/lib/types/room";
// // // // // // // import { Floor } from "@/lib/types/floor";

// // // // // // // export default function Form({
// // // // // // //   initialValues,
// // // // // // //   floors,
// // // // // // //   rooms,
// // // // // // //   onSave,
// // // // // // //   onCancel,
// // // // // // // }: {
// // // // // // //   initialValues: any;
// // // // // // //   floors: Floor[];
// // // // // // //   rooms: Room[];
// // // // // // //   onSave: (values: any) => void;
// // // // // // //   onCancel: () => void;
// // // // // // // }) {
// // // // // // //   const [values, setValues] = useState(initialValues);
// // // // // // //   const [previewRoom, setPreviewRoom] = useState("");

// // // // // // //   useEffect(() => {
// // // // // // //     setValues(initialValues);
// // // // // // //   }, [initialValues]);

// // // // // // //   // ✅ Preview only (same logic as backend)
// // // // // // //   function handleFloorChange(floorId: number) {
// // // // // // //     setValues((prev: any) => ({ ...prev, floorId }));

// // // // // // //     const floorRooms = rooms.filter(
// // // // // // //       r => Number(r.floorID) === floorId
// // // // // // //     );

// // // // // // //     let nextRoom = floorId * 1000 + 1;

// // // // // // //     if (floorRooms.length > 0) {
// // // // // // //       const maxRoom = Math.max(
// // // // // // //         ...floorRooms.map(r => parseInt(r.roomNumber) || 0)
// // // // // // //       );
// // // // // // //       nextRoom = maxRoom + 1;
// // // // // // //     }

// // // // // // //     setPreviewRoom(String(nextRoom));
// // // // // // //   }

// // // // // // //   function handleSubmit() {
// // // // // // //     onSave(values);
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="fixed inset-0 flex items-center justify-center">
// // // // // // //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// // // // // // //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// // // // // // //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// // // // // // //         {/* FLOOR */}
// // // // // // //         <div className="mb-3">
// // // // // // //           <label>Floor</label>
// // // // // // //           <select
// // // // // // //             value={values.floorId}
// // // // // // //             onChange={(e) => handleFloorChange(Number(e.target.value))}
// // // // // // //             className="w-full border p-2"
// // // // // // //           >
// // // // // // //             <option value="">Select Floor</option>
// // // // // // //             {floors.map(f => (
// // // // // // //               <option key={f.id} value={f.id}>
// // // // // // //                 {f.name}
// // // // // // //               </option>
// // // // // // //             ))}
// // // // // // //           </select>
// // // // // // //         </div>

// // // // // // //         {/* PREVIEW ROOM */}
// // // // // // //         <div className="mb-3">
// // // // // // //           <label>Room Number (Auto)</label>
// // // // // // //           <input
// // // // // // //             value={previewRoom}
// // // // // // //             readOnly
// // // // // // //             className="w-full border p-2 bg-gray-100"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* STATUS */}
// // // // // // //         <div className="mb-3">
// // // // // // //           <label>Status</label>
// // // // // // //           <select
// // // // // // //             value={values.status}
// // // // // // //             onChange={(e) =>
// // // // // // //               setValues((prev: any) => ({
// // // // // // //                 ...prev,
// // // // // // //                 status: e.target.value,
// // // // // // //               }))
// // // // // // //             }
// // // // // // //             className="w-full border p-2"
// // // // // // //           >
// // // // // // //             <option value="AVAILABLE">AVAILABLE</option>
// // // // // // //             <option value="OCCUPIED">OCCUPIED</option>
// // // // // // //           </select>
// // // // // // //         </div>

// // // // // // //         {/* IMAGE */}
// // // // // // //         <div className="mb-3">
// // // // // // //           <label>Image</label>
// // // // // // //           <input
// // // // // // //             type="file"
// // // // // // //             onChange={(e) =>
// // // // // // //               setValues((prev: any) => ({
// // // // // // //                 ...prev,
// // // // // // //                 imageFile: e.target.files?.[0],
// // // // // // //               }))
// // // // // // //             }
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="flex justify-end gap-2 mt-4">
// // // // // // //           <button onClick={onCancel}>Cancel</button>
// // // // // // //           <button
// // // // // // //             onClick={handleSubmit}
// // // // // // //             className="bg-blue-600 text-white px-4 py-1"
// // // // // // //           >
// // // // // // //             Save
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import { Room } from "@/lib/types/room";
// // // // // // import { Floor } from "@/lib/types/floor";

// // // // // // export default function Form({
// // // // // //   floors,
// // // // // //   rooms,
// // // // // //   onSave,
// // // // // //   onCancel,
// // // // // // }: {
// // // // // //   floors: Floor[];
// // // // // //   rooms: Room[];
// // // // // //   onSave: (values: any) => void;
// // // // // //   onCancel: () => void;
// // // // // // }) {
// // // // // //   const [values, setValues] = useState<any>({
// // // // // //     floorId: floors[0]?.id || "",
// // // // // //     roomNumber: "",
// // // // // //     status: "AVAILABLE",
// // // // // //     imageFile: null,
// // // // // //   });

// // // // // //   const [previewRoom, setPreviewRoom] = useState("");

// // // // // //   // Auto-generate room number when floor changes
// // // // // //   function handleFloorChange(floorId: number) {
// // // // // //     setValues((prev: any) => ({ ...prev, floorId }));

// // // // // //     const floorRooms = rooms.filter((r) => Number(r.floorID) === floorId);
// // // // // //     let nextRoom = floorId * 100 + 1;

// // // // // //     if (floorRooms.length > 0) {
// // // // // //       const maxRoom = Math.max(
// // // // // //         ...floorRooms.map((r) => parseInt(r.roomNumber) || 0)
// // // // // //       );
// // // // // //       nextRoom = maxRoom + 1;
// // // // // //     }

// // // // // //     setPreviewRoom(String(nextRoom));
// // // // // //     setValues((prev: any) => ({ ...prev, roomNumber: String(nextRoom) }));
// // // // // //   }

// // // // // //   function handleSubmit() {
// // // // // //     onSave(values);
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="fixed inset-0 flex items-center justify-center">
// // // // // //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// // // // // //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// // // // // //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// // // // // //         {/* FLOOR */}
// // // // // //         <div className="mb-3">
// // // // // //           <label>Floor</label>
// // // // // //           <select
// // // // // //             value={values.floorId}
// // // // // //             onChange={(e) => handleFloorChange(Number(e.target.value))}
// // // // // //             className="w-full border p-2"
// // // // // //           >
// // // // // //             <option value="">Select Floor</option>
// // // // // //             {floors.map((f) => (
// // // // // //               <option key={f.id} value={f.id}>
// // // // // //                 {f.name}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //         </div>

// // // // // //         {/* ROOM NUMBER */}
// // // // // //         <div className="mb-3">
// // // // // //           <label>Room Number (Auto)</label>
// // // // // //           <input
// // // // // //             value={previewRoom || values.roomNumber}
// // // // // //             readOnly
// // // // // //             className="w-full border p-2 bg-gray-100"
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* STATUS */}
// // // // // //         <div className="mb-3">
// // // // // //           <label>Status</label>
// // // // // //           <select
// // // // // //             value={values.status}
// // // // // //             onChange={(e) =>
// // // // // //               setValues((prev: any) => ({
// // // // // //                 ...prev,
// // // // // //                 status: e.target.value,
// // // // // //               }))
// // // // // //             }
// // // // // //             className="w-full border p-2"
// // // // // //           >
// // // // // //             <option value="AVAILABLE">AVAILABLE</option>
// // // // // //             <option value="OCCUPIED">OCCUPIED</option>
// // // // // //           </select>
// // // // // //         </div>

// // // // // //         {/* IMAGE */}
// // // // // //         <div className="mb-3">
// // // // // //           <label>Image</label>
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             onChange={(e) =>
// // // // // //               setValues((prev: any) => ({
// // // // // //                 ...prev,
// // // // // //                 imageFile: e.target.files?.[0],
// // // // // //               }))
// // // // // //             }
// // // // // //           />
// // // // // //         </div>

// // // // // //         <div className="flex justify-end gap-2 mt-4">
// // // // // //           <button onClick={onCancel}>Cancel</button>
// // // // // //           <button
// // // // // //             onClick={handleSubmit}
// // // // // //             className="bg-blue-600 text-white px-4 py-1"
// // // // // //           >
// // // // // //             Save
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import { Room } from "@/lib/types/room";
// // // // // import { Floor } from "@/lib/types/floor";

// // // // // export default function Form({
// // // // //   floors,
// // // // //   rooms,
// // // // //   onSave,
// // // // //   onCancel,
// // // // // }: {
// // // // //   floors: Floor[];
// // // // //   rooms: Room[];
// // // // //   onSave: (values: any) => void;
// // // // //   onCancel: () => void;
// // // // // }) {
// // // // //   const [values, setValues] = useState<any>({
// // // // //     floorId: floors[0]?.id || "",
// // // // //     roomNumber: "",
// // // // //     price: 0,
// // // // //     status: "AVAILABLE",
// // // // //     imageFile: null,
// // // // //   });

// // // // //   const [previewRoom, setPreviewRoom] = useState("");

// // // // //   // Auto-generate room number when floor changes
// // // // //   function handleFloorChange(floorId: number) {
// // // // //     setValues((prev: any) => ({ ...prev, floorId }));

// // // // //     const floorRooms = rooms.filter((r) => Number(r.floorID) === floorId);
// // // // //     let nextRoom = floorId * 100 + 1;

// // // // //     if (floorRooms.length > 0) {
// // // // //       const maxRoom = Math.max(
// // // // //         ...floorRooms.map((r) => parseInt(r.roomNumber) || 0)
// // // // //       );
// // // // //       nextRoom = maxRoom + 1;
// // // // //     }

// // // // //     setPreviewRoom(String(nextRoom));
// // // // //     setValues((prev: any) => ({ ...prev, roomNumber: String(nextRoom) }));
// // // // //   }

// // // // //   function handleSubmit() {
// // // // //     onSave(values);
// // // // //   }

// // // // //   return (
// // // // //     <div className="fixed inset-0 flex items-center justify-center">
// // // // //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// // // // //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// // // // //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// // // // //         {/* FLOOR */}
// // // // //         <div className="mb-3">
// // // // //           <label>Floor</label>
// // // // //           <select
// // // // //             value={values.floorId}
// // // // //             onChange={(e) => handleFloorChange(Number(e.target.value))}
// // // // //             className="w-full border p-2"
// // // // //           >
// // // // //             <option value="">Select Floor</option>
// // // // //             {floors.map((f) => (
// // // // //               <option key={f.id} value={f.id}>
// // // // //                 {f.name}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>
// // // // //         </div>

// // // // //         {/* ROOM NUMBER */}
// // // // //         <div className="mb-3">
// // // // //           <label>Room Number (Auto)</label>
// // // // //           <input
// // // // //             value={previewRoom || values.roomNumber}
// // // // //             readOnly
// // // // //             className="w-full border p-2 bg-gray-100"
// // // // //           />
// // // // //         </div>

// // // // //         {/* PRICE */}
// // // // //         <div className="mb-3">
// // // // //           <label>Price</label>
// // // // //           <input
// // // // //             type="number"
// // // // //             value={values.price}
// // // // //             onChange={(e) =>
// // // // //               setValues((prev: any) => ({
// // // // //                 ...prev,
// // // // //                 price: Number(e.target.value),
// // // // //               }))
// // // // //             }
// // // // //             className="w-full border p-2"
// // // // //           />
// // // // //         </div>

// // // // //         {/* STATUS */}
// // // // //         <div className="mb-3">
// // // // //           <label>Status</label>
// // // // //           <select
// // // // //             value={values.status}
// // // // //             onChange={(e) =>
// // // // //               setValues((prev: any) => ({
// // // // //                 ...prev,
// // // // //                 status: e.target.value,
// // // // //               }))
// // // // //             }
// // // // //             className="w-full border p-2"
// // // // //           >
// // // // //             <option value="AVAILABLE">AVAILABLE</option>
// // // // //             <option value="OCCUPIED">OCCUPIED</option>
// // // // //           </select>
// // // // //         </div>

// // // // //         {/* IMAGE */}
// // // // //         <div className="mb-3">
// // // // //           <label>Image</label>
// // // // //           <input
// // // // //             type="file"
// // // // //             onChange={(e) =>
// // // // //               setValues((prev: any) => ({
// // // // //                 ...prev,
// // // // //                 imageFile: e.target.files?.[0],
// // // // //               }))
// // // // //             }
// // // // //           />
// // // // //         </div>

// // // // //         <div className="flex justify-end gap-2 mt-4">
// // // // //           <button onClick={onCancel}>Cancel</button>
// // // // //           <button
// // // // //             onClick={handleSubmit}
// // // // //             className="bg-blue-600 text-white px-4 py-1"
// // // // //           >
// // // // //             Save
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState } from "react";
// // // // import { Room } from "@/lib/types/room";
// // // // import { Floor } from "@/lib/types/floor";

// // // // export default function Form({
// // // //   floors,
// // // //   rooms,
// // // //   onSave,
// // // //   onCancel,
// // // // }: {
// // // //   floors: Floor[];
// // // //   rooms: Room[];
// // // //   onSave: (values: any) => void;
// // // //   onCancel: () => void;
// // // // }) {
// // // //   const [values, setValues] = useState<any>({
// // // //     floorId: floors[0]?.id || "",
// // // //     roomNumber: "",
// // // //     price: 0,
// // // //     status: "AVAILABLE",
// // // //     imageFile: null,
// // // //   });

// // // //   const [previewRoom, setPreviewRoom] = useState("");

// // // //   // Auto-generate room number when floor changes
// // // //   function handleFloorChange(floorId: number) {
// // // //     setValues((prev: any) => ({ ...prev, floorId }));

// // // //     const floorRooms = rooms.filter((r) => Number(r.floorID) === floorId);
// // // //     let nextRoom = floorId * 100 + 1;

// // // //     if (floorRooms.length > 0) {
// // // //       const maxRoom = Math.max(
// // // //         ...floorRooms.map((r) => parseInt(r.roomNumber) || 0)
// // // //       );
// // // //       nextRoom = maxRoom + 1;
// // // //     }

// // // //     setPreviewRoom(String(nextRoom));
// // // //     setValues((prev: any) => ({ ...prev, roomNumber: String(nextRoom) }));
// // // //   }

// // // //   function handleSubmit() {
// // // //     onSave(values);
// // // //   }

// // // //   return (
// // // //     <div className="fixed inset-0 flex items-center justify-center">
// // // //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// // // //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// // // //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// // // //         {/* Floor */}
// // // //         <div className="mb-3">
// // // //           <label>Floor</label>
// // // //           <select
// // // //             value={values.floorId}
// // // //             onChange={(e) => handleFloorChange(Number(e.target.value))}
// // // //             className="w-full border p-2"
// // // //           >
// // // //             <option value="">Select Floor</option>
// // // //             {floors.map((f) => (
// // // //               <option key={f.id} value={f.id}>
// // // //                 {f.name}
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //         </div>

// // // //         {/* Room Number */}
// // // //         <div className="mb-3">
// // // //           <label>Room Number (Auto)</label>
// // // //           <input
// // // //             value={previewRoom || values.roomNumber}
// // // //             readOnly
// // // //             className="w-full border p-2 bg-gray-100"
// // // //           />
// // // //         </div>

// // // //         {/* Price */}
// // // //         <div className="mb-3">
// // // //           <label>Price</label>
// // // //           <input
// // // //             type="number"
// // // //             value={values.price}
// // // //             onChange={(e) =>
// // // //               setValues((prev: any) => ({
// // // //                 ...prev,
// // // //                 price: Number(e.target.value),
// // // //               }))
// // // //             }
// // // //             className="w-full border p-2"
// // // //           />
// // // //         </div>

// // // //         {/* Status */}
// // // //         <div className="mb-3">
// // // //           <label>Status</label>
// // // //           <select
// // // //             value={values.status}
// // // //             onChange={(e) =>
// // // //               setValues((prev: any) => ({
// // // //                 ...prev,
// // // //                 status: e.target.value,
// // // //               }))
// // // //             }
// // // //             className="w-full border p-2"
// // // //           >
// // // //             <option value="AVAILABLE">AVAILABLE</option>
// // // //             <option value="OCCUPIED">OCCUPIED</option>
// // // //           </select>
// // // //         </div>

// // // //         {/* Image */}
// // // //         <div className="mb-3">
// // // //           <label>Image</label>
// // // //           <input
// // // //             type="file"
// // // //             onChange={(e) =>
// // // //               setValues((prev: any) => ({
// // // //                 ...prev,
// // // //                 imageFile: e.target.files?.[0],
// // // //               }))
// // // //             }
// // // //           />
// // // //         </div>

// // // //         <div className="flex justify-end gap-2 mt-4">
// // // //           <button onClick={onCancel}>Cancel</button>
// // // //           <button
// // // //             onClick={handleSubmit}
// // // //             className="bg-blue-600 text-white px-4 py-1"
// // // //           >
// // // //             Save
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState } from "react";
// // // import { Room } from "@/lib/types/room";
// // // import { Floor } from "@/lib/types/floor";

// // // export default function Form({
// // //   floors,
// // //   rooms,
// // //   onSave,
// // //   onCancel,
// // // }: {
// // //   floors: Floor[];
// // //   rooms: Room[];
// // //   onSave: (values: any) => void;
// // //   onCancel: () => void;
// // // }) {
// // //   const [values, setValues] = useState<any>({
// // //     floorId: "",
// // //     roomNumber: "",
// // //     price: 0,
// // //     status: "",
// // //     imageFile: null,
// // //   });

// // //   function handleSubmit() {
// // //     onSave(values);
// // //   }

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center">
// // //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// // //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// // //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// // //         {/* Floor ID */}
// // //         <div className="mb-3">
// // //           <label>Floor ID</label>
// // //           <input
// // //             type="number"
// // //             value={values.floorId}
// // //             onChange={(e) =>
// // //               setValues((prev: any) => ({
// // //                 ...prev,
// // //                 floorId: Number(e.target.value),
// // //               }))
// // //             }
// // //             className="w-full border p-2"
// // //           />
// // //         </div>

// // //         {/* Room Number */}
// // //         <div className="mb-3">
// // //           <label>Room Number</label>
// // //           <input
// // //             type="text"
// // //             value={values.roomNumber}
// // //             onChange={(e) =>
// // //               setValues((prev: any) => ({
// // //                 ...prev,
// // //                 roomNumber: e.target.value,
// // //               }))
// // //             }
// // //             className="w-full border p-2"
// // //           />
// // //         </div>

// // //         {/* Price */}
// // //         <div className="mb-3">
// // //           <label>Price</label>
// // //           <input
// // //             type="number"
// // //             value={values.price}
// // //             onChange={(e) =>
// // //               setValues((prev: any) => ({
// // //                 ...prev,
// // //                 price: Number(e.target.value),
// // //               }))
// // //             }
// // //             className="w-full border p-2"
// // //           />
// // //         </div>

// // //         {/* Status */}
// // //         <div className="mb-3">
// // //           <label>Status</label>
// // //           <input
// // //             type="text"
// // //             value={values.status}
// // //             onChange={(e) =>
// // //               setValues((prev: any) => ({
// // //                 ...prev,
// // //                 status: e.target.value,
// // //               }))
// // //             }
// // //             className="w-full border p-2"
// // //           />
// // //         </div>

// // //         {/* Image File */}
// // //         <div className="mb-3">
// // //           <label>Image File</label>
// // //           <input
// // //             type="file"
// // //             onChange={(e) =>
// // //               setValues((prev: any) => ({
// // //                 ...prev,
// // //                 imageFile: e.target.files?.[0],
// // //               }))
// // //             }
// // //           />
// // //           {values.imageFile && (
// // //             <p className="text-sm text-gray-600 mt-1">
// // //               Selected: {values.imageFile.name}
// // //             </p>
// // //           )}
// // //         </div>

// // //         <div className="flex justify-end gap-2 mt-4">
// // //           <button onClick={onCancel}>Cancel</button>
// // //           <button
// // //             onClick={handleSubmit}
// // //             className="bg-blue-600 text-white px-4 py-1"
// // //           >
// // //             Save
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import { Room } from "@/lib/types/room";
// // import { Floor } from "@/lib/types/floor";

// // export default function Form({
// //   floors,
// //   rooms,
// //   onSave,
// //   onCancel,
// // }: {
// //   floors: Floor[];
// //   rooms: Room[];
// //   onSave: (values: any) => void;
// //   onCancel: () => void;
// // }) {
// //   const [values, setValues] = useState<any>({
// //     floorId: "",
// //     roomNumber: "",
// //     price: 0,
// //     status: "",
// //     imageFile: null,
// //   });

// //   function handleSubmit() {
// //     onSave(values);
// //   }

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center">
// //       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

// //       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
// //         <h2 className="text-xl font-bold mb-4">Add Room</h2>

// //         {/* Floor combobox: show name, store id */}
// //         <div className="mb-3">
// //           <label>Floor</label>
// //           <select
// //             value={values.floorId}
// //             onChange={(e) =>
// //               setValues((prev: any) => ({
// //                 ...prev,
// //                 floorId: Number(e.target.value), // store ID
// //               }))
// //             }
// //             className="w-full border p-2"
// //           >
// //             <option value="">Select Floor</option>
// //             {floors.map((f) => (
// //               <option key={f.id} value={f.id}>
// //                 {f.name} {/* show name */}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Room Number */}
// //         <div className="mb-3">
// //           <label>Room Number</label>
// //           <input
// //             type="text"
// //             value={values.roomNumber}
// //             onChange={(e) =>
// //               setValues((prev: any) => ({
// //                 ...prev,
// //                 roomNumber: e.target.value,
// //               }))
// //             }
// //             className="w-full border p-2"
// //           />
// //         </div>

// //         {/* Price */}
// //         <div className="mb-3">
// //           <label>Price</label>
// //           <input
// //             type="number"
// //             value={values.price}
// //             onChange={(e) =>
// //               setValues((prev: any) => ({
// //                 ...prev,
// //                 price: Number(e.target.value),
// //               }))
// //             }
// //             className="w-full border p-2"
// //           />
// //         </div>

// //         {/* Status */}
// //         <div className="mb-3">
// //           <label>Status</label>
// //           <input
// //             type="text"
// //             value={values.status}
// //             onChange={(e) =>
// //               setValues((prev: any) => ({
// //                 ...prev,
// //                 status: e.target.value,
// //               }))
// //             }
// //             className="w-full border p-2"
// //           />
// //         </div>

// //         {/* Image File */}
// //         <div className="mb-3">
// //           <label>Image File</label>
// //           <input
// //             type="file"
// //             onChange={(e) =>
// //               setValues((prev: any) => ({
// //                 ...prev,
// //                 imageFile: e.target.files?.[0],
// //               }))
// //             }
// //           />
// //           {values.imageFile && (
// //             <p className="text-sm text-gray-600 mt-1">
// //               Selected: {values.imageFile.name}
// //             </p>
// //           )}
// //         </div>

// //         <div className="flex justify-end gap-2 mt-4">
// //           <button onClick={onCancel}>Cancel</button>
// //           <button
// //             onClick={handleSubmit}
// //             className="bg-blue-600 text-white px-4 py-1"
// //           >
// //             Save
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import { Room } from "@/lib/types/room";
// import { Floor } from "@/lib/types/floor";

// export default function Form({
//   floors,
//   rooms,
//   onSave,
//   onCancel,
// }: {
//   floors: Floor[];
//   rooms: Room[];
//   onSave: (values: any) => void;
//   onCancel: () => void;
// }) {
//   const [values, setValues] = useState<any>({
//     floorId: "",
//     price: 0,
//     status: "",
//     imageFile: null,
//   });

//   function handleSubmit() {
//     onSave(values);
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

//       <div className="bg-white p-6 rounded-xl w-[400px] z-10">
//         <h2 className="text-xl font-bold mb-4">Add Room</h2>

//         {/* Floor combobox: show name, store id */}
//         <div className="mb-3">
//           <label>Floor</label>
//           <select
//             value={values.floorId}
//             onChange={(e) =>
//               setValues((prev: any) => ({
//                 ...prev,
//                 floorId: Number(e.target.value),
//               }))
//             }
//             className="w-full border p-2"
//           >
//             <option value="">Select Floor</option>
//             {floors.map((f) => (
//               <option key={f.id} value={f.id}>
//                 {f.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price */}
//         <div className="mb-3">
//           <label>Price</label>
//           <input
//             type="number"
//             value={values.price}
//             onChange={(e) =>
//               setValues((prev: any) => ({
//                 ...prev,
//                 price: Number(e.target.value),
//               }))
//             }
//             className="w-full border p-2"
//           />
//         </div>

//         {/* Status */}
//         <div className="mb-3">
//           <label>Status</label>
//           <select
//             value={values.status}
//             onChange={(e) =>
//               setValues((prev: any) => ({
//                 ...prev,
//                 status: e.target.value,
//               }))
//             }
//             className="w-full border p-2"
//           >
//             <option value="">Select Status</option>
//             <option value="AVAILABLE">AVAILABLE</option>
//             <option value="OCCUPIED">OCCUPIED</option>
//             <option value="ACTIVE">ACTIVE</option>
//             <option value="INACTIVE">INACTIVE</option>
//           </select>
//         </div>

//         {/* Image File */}
//         <div className="mb-3">
//           <label>Image File</label>
//           <input
//             type="file"
//             onChange={(e) =>
//               setValues((prev: any) => ({
//                 ...prev,
//                 imageFile: e.target.files?.[0],
//               }))
//             }
//           />
//           {values.imageFile && (
//             <p className="text-sm text-gray-600 mt-1">
//               Selected: {values.imageFile.name}
//             </p>
//           )}
//         </div>

//         <div className="flex justify-end gap-2 mt-4">
//           <button onClick={onCancel}>Cancel</button>
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-4 py-1"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { Room } from "@/lib/types/room";
import { Floor } from "@/lib/types/floor";

export default function FormRoom({
  floors,
  rooms,
  onSave,
  onCancel,
  isEdit = false,
}: {
  floors: Floor[];
  rooms: Room[];
  onSave: (values: any) => void;
  onCancel: () => void;
  isEdit?: boolean;
}) {
  const [values, setValues] = useState<any>({
    floorId: "",
    price: 0,
    status: "",
    imageFile: null,
  });

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
          {isEdit ? "Update Room" : "Create Room"}
        </h2>

        <div className="space-y-6">
          {/* Floor combobox */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Floor
            </label>
            <select
              value={values.floorId}
              onChange={(e) =>
                setValues((prev: any) => ({
                  ...prev,
                  floorId: Number(e.target.value),
                }))
              }
              className="w-full border rounded-xl px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Floor...</option>
              {floors.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              value={values.price}
              onChange={(e) =>
                setValues((prev: any) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
              className="w-full border rounded-xl px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Status dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              value={values.status}
              onChange={(e) =>
                setValues((prev: any) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
              className="w-full border rounded-xl px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Status...</option>
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="OCCUPIED">OCCUPIED</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* Image upload */}
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image File
            </label>
            <input
              type="file"
              onChange={(e) =>
                setValues((prev: any) => ({
                  ...prev,
                  imageFile: e.target.files?.[0] ?? null,
                }))
              }
              className="w-full border rounded-xl px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500"
            />
            {values.imageFile && (
              <p className="text-sm text-gray-600 mt-1">
                Selected: {values.imageFile.name}
              </p>
            )}
          </div> */}
          {/* Image Upload */}
<div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Room Image
  </label>

  <div className="flex items-center justify-center w-full">
    <label
      htmlFor="imageFile"
      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
    >
      {values.imageFile ? (
        <img
          src={URL.createObjectURL(values.imageFile)}
          alt="Preview"
          className="h-28 object-cover rounded-lg"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-500">
          <svg
            className="w-10 h-10 mb-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V4m0 0L3 8m4-4l4 4M21 12h-4m0 0l-4-4m4 4l-4 4"
            />
          </svg>
          <span className="text-sm">Click to upload or drag & drop</span>
        </div>
      )}
      <input
        id="imageFile"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setValues((prev: any) => ({
            ...prev,
            imageFile: e.target.files?.[0] ?? null,
          }))
        }
      />
    </label>
  </div>

  {values.imageFile && (
    <p className="text-sm text-gray-600 mt-2">
      Selected: {values.imageFile.name}
    </p>
  )}
</div>

        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition"
          >
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
