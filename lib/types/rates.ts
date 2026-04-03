export interface Rates {
  bikeRate: number;
  electricityRate: number;
  motorbikeRate: number;
  waterRate: number;
}
export interface RatesRequest {
  bikeRate?: number;
  electricityRate?: number;
  motorbikeRate?: number;
  waterRate?: number;
}