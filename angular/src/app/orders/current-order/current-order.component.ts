import { Component, OnInit } from '@angular/core';

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

  public ngOnInit() {
    this.menuService.getMenuItems().once("value").then(
      (snapshot) => {
        this.menuItems = snapshot.val();
      }
    );

    this.resetCurrentOrder();
  }

  public addItemToOrder(menuItem: MenuItem) {
    this.currentOrder.orderedItems.push({
      name: menuItem.name,
      price: menuItem.price,
      imageUrl: "",
      description: "",
      extras: [],
      returnable: menuItem.returnable == undefined ? false : menuItem.returnable
    });

    this.currentOrder.total += menuItem.price;
  }

  public removeItemFromOrder(index: number) {
    this.currentOrder.total = this.currentOrder.total - this.currentOrder.orderedItems[index].price;
    this.currentOrder.orderedItems.splice(index, 1);
  }

  public submitOrder() {
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
      refundItems: [],
      customerName: "Test",
      isClown: false,
      total: 0,
      submittedTime: undefined,
    };
  }
}
