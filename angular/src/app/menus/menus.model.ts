export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  extras: MenuItem[];
  returnable?: boolean;
}

export class MenuItemImpl implements MenuItem {

  constructor(public name: string, public description: string, public price: number, public imageUrl: string, public extras: MenuItem[]) {
  }
}
