
export interface Floor {
  id: number;
  name: string;
  description?: string;
  price: number;
  numberOfRooms?:number;
}

// Request type (no id)
export interface FloorRequest {
  name: string;
  description?: string;
  price: number;
  numberOfRooms?:number;
}

// Response type (reuse Floor)
export type FloorResponse = Floor;
