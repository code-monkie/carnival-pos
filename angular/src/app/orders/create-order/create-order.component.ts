import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../menus/menus.model';
import { Order } from '../orders.model';
import { OrdersService} from '../orders.service'
import { MenusService } from '../../menus/menus.service';
import { CanComponentDeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, CanComponentDeactivate {
  currentOrder: Order;
  menuItems: MenuItem[];
  loading: boolean = true;

  constructor(private menuService: MenusService, private ordersService: OrdersService ) { }

  public ngOnInit() {
    this.menuService.getMenuItems().once("value").then(
      (snapshot) => {
        this.menuItems = snapshot.val();
        this.loading = false;
      }
    ).catch(
      error => console.log(error)
    );

    this.initializeCurrentOrder();
  }

  private initializeCurrentOrder() {
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
  
  public addItemToOrder(menuItem: MenuItem) {
    this.currentOrder.orderedItems.push({
      name: menuItem.name,
      price: menuItem.price,
      imageUrl: "",
      description: "",
      extras: [],
      returnable: menuItem.returnable == undefined ? false : menuItem.returnable
    });

    if (menuItem.maxPerOrder != undefined) {
      menuItem.maxPerOrder -= 1;
    }
   
    this.currentOrder.total += menuItem.price;
  }

  public removeItemFromOrder(index: number) {
    let order = this.currentOrder.orderedItems[index];
    this.currentOrder.total = this.currentOrder.total - order.price;
    this.menuItems.forEach(menuItem => {
      if (menuItem.name === order.name && menuItem.maxPerOrder != undefined) {
        menuItem.maxPerOrder += 1;
      }
    });

    this.currentOrder.orderedItems.splice(index, 1);
  }

  public submitOrder() {
    this.ordersService.addOrder(this.currentOrder).then(
      () => {
        this.initializeCurrentOrder()
      }
    );
  }

  public canDeactivate() {
    if (this.currentOrder.orderedItems.length === 0) {
      return true;
    }
    return window.confirm('Leave unfinished order?');
  }
}
