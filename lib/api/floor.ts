
import { apiFetch } from "../fetcher";
import { Floor, FloorRequest } from "../types/floor";

const BASE_URL = "/api/floors";

export async function getFloors(): Promise<Floor[]> {
  return apiFetch(BASE_URL);
}

export async function getFloorById(id: number): Promise<Floor> {
  return apiFetch(`${BASE_URL}/${id}`);
}
// ✅ Create floor
export async function createFloor(floor: FloorRequest): Promise<Floor> {
  return apiFetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(floor),
  });
}

export async function updateFloor(id: string , floor: FloorRequest): Promise<Floor> {
  // alert(id+1)
  return apiFetch(`${BASE_URL}/${id}`,{
    method: "PUT",
    body: JSON.stringify(floor),
  });
}


export async function deleteFloor(id: number): Promise<{ message: string }> {
  return apiFetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
