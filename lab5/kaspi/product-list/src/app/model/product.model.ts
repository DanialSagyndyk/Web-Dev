import { NumberSymbol } from "@angular/common";

export interface Product{
  id:number;
  category:string;
  name:string;
  description:string;
  imageUrls:string[];
  rating:number;
  link:string;
  likes:number;
}