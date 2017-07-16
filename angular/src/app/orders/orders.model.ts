import { MenuItem } from "../menus/menus.model";

export interface Order {
    name: Object,
    orderedItems: MenuItem[],
    refundItems: MenuItem[],
    customerName: string,
    isClown?: boolean,
    total: number,
    processed?: boolean,
    submittedTime: string
}