import { MenuItem } from "../menus/menus.model";

export interface Order {
    name: Object,
    customerName: string,
    total: number,
    orderedItems: MenuItem[],
    refundItems: MenuItem[],
    isClown?: boolean,
    submittedTime: string
    processed?: boolean,
}

export interface Combos{
    name: Object,
    comboItems: string [],
    total: number
}