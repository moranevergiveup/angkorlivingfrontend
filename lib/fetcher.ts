// export async function apiFetch(url: string, options: RequestInit = {}) {
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   const res = await fetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...options.headers,
//     },
//   });

//   if (!res.ok) throw new Error(`API error: ${res.status}`);
//   return res.json();
// }
// lib/fetcher.ts
// export async function apiFetch(url: string, options: RequestInit = {}) {
//   // ✅ get token safely (only in browser)
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   const res = await fetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...(options.headers || {}),
//     },
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error("API error details:", errorText);
//     throw new Error(`API error: ${res.status}`);
//   }

//   return res.json();
// }

export async function apiFetch(url: string, options: RequestInit = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  // ✅ Only set Content-Type if body is plain object/string
  if (
    options.body &&
    !(options.body instanceof FormData) &&
    !headers["Content-Type"]
  ) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API error details:", errorText);
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
