import { MenuItem } from "../menus/menus.model";

export interface OrderItem {
    orderedItems: MenuItem[];
    customerName: string;
    isClown: boolean;
}

export class OrderImpl implements OrderItem {

  constructor(public orderedItems: MenuItem[], public customerName: string, public isClown: boolean) {
  }
}
