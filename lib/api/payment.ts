import { apiFetch } from "../fetcher";
export async function getPayments() {
  return await apiFetch("/api/payments");
}