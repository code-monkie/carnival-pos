export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  extras: MenuItem[];
  returnable?: boolean;
  maxPerOrder?: number
}