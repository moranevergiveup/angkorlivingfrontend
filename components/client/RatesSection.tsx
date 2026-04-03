// // "use client";
// // import { useEffect, useState } from "react";
// // import { getRates } from "@/lib/api/rates";
// // import {  Rates } from "@/lib/types/rates";

// // export default function RatesSection() {
// //   const [rates, setRates] = useState<Rates | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //   getRates()
// //     .then((data) => {
// //       setRates(data);
// //       setLoading(false);
// //     })
// //     .catch(() => setLoading(false));
// // }, []);

// //   return (
// //     <section className="py-16 px-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-green-50">
// //       <div className="max-w-6xl mx-auto text-center">
// //         <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
// //           Service Rates
// //         </h2>
// //         <p className="text-gray-600 mb-10">
// //           Clear and transparent pricing for your convenience.
// //         </p>

// //         {loading && (
// //           <p className="text-gray-400 animate-pulse">Loading rates…</p>
// //         )}

// //         {rates && (
// //           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
// //             <RateCard icon="🚲" label="Bike" value={rates.bikeRate} color="text-orange-600" />
// //             <RateCard icon="⚡" label="Electricity" value={rates.electricityRate} color="text-yellow-600" />
// //             <RateCard icon="🏍️" label="Motorbike" value={rates.motorbikeRate} color="text-green-600" />
// //             <RateCard icon="💧" label="Water" value={rates.waterRate} color="text-blue-600" />
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // function RateCard({
// //   icon,
// //   label,
// //   value,
// //   color,
// // }: {
// //   icon: string;
// //   label: string;
// //   value: number;
// //   color: string;
// // }) {
// //   return (
// //     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1">
// //       <p className="text-3xl">{icon}</p>
// //       <h3 className="font-semibold text-gray-700 mt-2">{label}</h3>
// //       <p className={`${color} font-bold text-lg`}>${value}</p>
// //     </div>
// //   );
// // }


// "use client";
// import { useEffect, useState } from "react";
// import { getRates } from "@/lib/api/rates";
// import { Rates } from "@/lib/types/rates";
// import { FaBicycle, FaMotorcycle } from "react-icons/fa";
// import { GiWaterDrop } from "react-icons/gi";
// import { MdElectricalServices } from "react-icons/md";

// export default function RatesSection() {
//   const [rates, setRates] = useState<Rates | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getRates()
//       .then((data) => {
//         setRates(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-green-50">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
//           Service Rates
//         </h2>
//         <p className="text-gray-600 mb-10">
//           Clear and transparent pricing for your convenience.
//         </p>

//         {loading && (
//           <p className="text-gray-400 animate-pulse">Loading rates…</p>
//         )}

//         {rates && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             <RateCard icon={<FaBicycle size={40} />} label="Bike" value={rates.bikeRate} color="text-orange-600" />
//             <RateCard icon={<MdElectricalServices size={40} />} label="Electricity" value={rates.electricityRate} color="text-yellow-600" />
//             <RateCard icon={<FaMotorcycle size={40} />} label="Motorbike" value={rates.motorbikeRate} color="text-green-600" />
//             <RateCard icon={<GiWaterDrop size={40} />} label="Water" value={rates.waterRate} color="text-blue-600" />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function RateCard({
//   icon,
//   label,
//   value,
//   color,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: number;
//   color: string;
// }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1">
//       <div className="text-3xl text-center">{icon}</div>
//       <h3 className="font-semibold text-gray-700 mt-4">{label}</h3>
//       <p className={`${color} font-bold text-lg mt-2`}>${value}</p>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { getRates } from "@/lib/api/rates";
import { Rates } from "@/lib/types/rates";
import { FaBicycle, FaMotorcycle } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

export default function RatesSection() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRates()
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
          Service Rates
        </h2>
        <p className="text-gray-600 mb-10">
          Clear and transparent pricing for your convenience.
        </p>

        {loading && (
          <p className="text-gray-400 animate-pulse">Loading rates…</p>
        )}

        {rates && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <RateCard icon={<FaBicycle size={40} />} label="Bike" value={rates.bikeRate} unit="/month" color="text-orange-600" />
            <RateCard icon={<MdElectricalServices size={40} />} label="Electricity" value={rates.electricityRate} unit="/kWh" color="text-yellow-600" />
            <RateCard icon={<FaMotorcycle size={40} />} label="Motorbike" value={rates.motorbikeRate} unit="/month" color="text-green-600" />
            <RateCard icon={<GiWaterDrop size={40} />} label="Water" value={rates.waterRate} unit="/m³" color="text-blue-600" />
          </div>
        )}
      </div>
    </section>
  );
}

function RateCard({
  icon,
  label,
  value,
  unit,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  unit: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1">
      <div className="text-3xl text-center">{icon}</div>
      <h3 className="font-semibold text-gray-700 mt-4">{label}</h3>
      <p className={`${color} font-bold text-lg mt-2`}>
        ${value} <span className="text-gray-500 font-normal">{unit}</span>
      </p>
    </div>
  );
}