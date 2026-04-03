"use client";
import { useEffect, useState } from "react";
import { getRates, updateRates } from "@/lib/api/rates";
import { Rates } from "@/lib/types/rates";

export default function ManageRatesPage() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getRates()
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof Rates, value: string) => {
    if (!rates) return;
    setRates({ ...rates, [field]: parseFloat(value) });
  };

  const handleSave = async () => {
    if (!rates) return;
    setSaving(true);
    
    try {
      const updated = await updateRates(rates);
      setRates(updated);
      alert("Rates updated successfully!");
    } catch (err) {
      console.error(err);
      alert(String(rates))
      alert("Failed to update rates.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading rates…</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">Manage Rates</h1>

      {rates && (
        <div className="space-y-6">
          {(["bikeRate", "motorbikeRate", "electricityRate", "waterRate"] as (keyof Rates)[]).map((field) => (
            <div key={field} className="flex items-center justify-between bg-white shadow rounded-lg p-4">
              <label className="font-medium text-gray-700 capitalize">
                {field.replace("Rate", " Rate")}
              </label>
              <input
                type="number"
                step="0.1"
                value={rates[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-32 border rounded px-2 py-1 text-right"
              />
            </div>
          ))}

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow hover:from-orange-600 hover:to-yellow-600 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save Rates"}
          </button>
        </div>
      )}
    </div>
  );
}
