

// export async function apiFetch(url: string, options: RequestInit = {}) {
//   const token =
//     typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   const headers: HeadersInit = {
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     ...(options.headers || {}),
//   };

//   // ✅ Only set Content-Type if body is plain object/string
//   if (
//     options.body &&
//     !(options.body instanceof FormData) &&
//     !headers["Content-Type"]
//   ) {
//     headers["Content-Type"] = "application/json";
//   }

//   const res = await fetch(url, {
//     ...options,
//     headers,
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

  // ✅ Use plain object instead of HeadersInit
  let headers: Record<string, string> = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  // ✅ Merge existing headers safely
  if (options.headers) {
    const incoming =
      options.headers instanceof Headers
        ? Object.fromEntries(options.headers.entries())
        : Array.isArray(options.headers)
        ? Object.fromEntries(options.headers)
        : options.headers;

    headers = { ...headers, ...incoming };
  }

  // ✅ Fix error here
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