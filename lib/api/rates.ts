
import { apiFetch } from "../fetcher";
import { Rates ,RatesRequest} from "../types/rates";

const BASE_URL = "/api/rates";

// Get current rates
export async function getRates(): Promise<Rates> {
  return apiFetch(BASE_URL);
}

// Update rates (single resource, no ID)
export async function updateRates(rates: RatesRequest): Promise<Rates> {
  return apiFetch(BASE_URL, {
    method: "PUT",
    body: JSON.stringify(rates),
  });
}
