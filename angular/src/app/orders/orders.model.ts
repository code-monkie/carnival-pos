import { MenuItem } from "../menus/menus.model";

export interface Order {
    orderedItems: MenuItem[],
    customerName: string,
    isClown?: boolean,
    total: number
}

export interface OrderHistory {
  name: Object,
  order: Order,
  processed?: boolean
}

export class OrderImpl implements Order {

  constructor(public orderedItems: MenuItem[], public customerName: string, public isClown: boolean, public total: number) {
  }
}