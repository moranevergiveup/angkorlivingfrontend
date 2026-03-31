import { apiFetch } from "../fetcher";
export async function getRentals() {
  return await apiFetch("/api/rentals");
}

export async function getRentalById(id: string) {
  return await apiFetch(`/api/rentals/${id}`);
}