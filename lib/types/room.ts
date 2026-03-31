export interface Room {
  id: number;
  roomNumber: string;
  floorName: string;
  price: number;
  floorID:number;
  status: string;
  imageUrl: string | null;
}
export interface RoomRequest {
  floorId: Number;       
  status: string;     
  price?: number;        
  imageFile?: File;      
}