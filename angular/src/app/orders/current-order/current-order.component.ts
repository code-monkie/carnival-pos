import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { MenuItem } from '../../menus/menus.model';
import { Order } from '../orders.model';
import { OrdersService} from '../orders.service'

import { MenusService } from '../../menus/menus.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {
  currentOrder: Order
  menuItems: MenuItem[];

  constructor(private menuService: MenusService, private ordersService: OrdersService ) { }

  ngOnInit() {
    this.menuService.getMenuItems().once("value").then(
      (snapshot) => {
        console.log(snapshot.val());
        this.menuItems = snapshot.val();
      }
    );

    this.resetCurrentOrder();
  }

  addOrder(menuItem: MenuItem) {
    this.currentOrder.orderedItems.push({
      name: menuItem.name,
      price: menuItem.price,
      imageUrl: "",
      description: "",
      extras: []
    });

    this.currentOrder.total += menuItem.price;
  }

  removeItemFromOrder(index: number) {
    this.currentOrder.total = this.currentOrder.total - this.currentOrder.orderedItems[index].price;
    this.currentOrder.orderedItems.splice(index, 1);
  }

  submitOrder() {
    this.ordersService.addOrder(this.currentOrder).then(
      () => {
        this.resetCurrentOrder()
      }
    );
  }

  private resetCurrentOrder() {
    this.currentOrder = {
    name: "",
    orderedItems: [],
    customerName: "Test",
    isClown: false,
    total: 0
    };
  }
}
