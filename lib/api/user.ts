


import { apiFetch } from "../fetcher";
import { User, UserRequest } from "../types/user";
export async function login(email:string, password:string) {
  return apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password}),
  });
}

export async function getUsers(): Promise<User[]> {
  return apiFetch("/api/users");
}
export async function getUser(id: string): Promise<User> {
  return apiFetch(`/api/users/${id}`);
}

export async function createUser(user: UserRequest): Promise<User> {
  return apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
  });
}
export async function updateUser(id: string, user: Partial<UserRequest>): Promise<User> {
  return apiFetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
}
export async function deleteUser(id: number): Promise<void> {
  return apiFetch(`/api/users/${id}`, {
    method: "DELETE",
  });
}


export async function resetPassword(id: string, token?: string): Promise<string> {
  
     return apiFetch(`/api/users/${id}/reset-password`, {
    method: "PUT",
  });
}
