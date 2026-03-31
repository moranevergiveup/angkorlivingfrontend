export interface User {
  id: number;
  username: string;
  email: string;
  role?: string;
  phone?: string | null;
  profileImage?: string | null;
  
}

export interface UserRequest {
  username: string;
  email: string;
  password?: string;
  role?: string;
  phone?:string;
  profile?:string;
  
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  role: string;
  phone?: string | null;
  profileImage?: string | null;

}
