import { MenuItem } from "../menus/menus.model";

export interface Order {
    name: Object,
    orderedItems: MenuItem[],
    customerName: string,
    isClown?: boolean,
    total: number
    processed?: boolean
}

export interface OrderHistory {
  order: Order,
}

// export class OrderImpl implements Order {

//   // constructor(public orderedItems: MenuItem[], public customerName: string, public isClown: boolean, public total: number) {
//   // }
// }