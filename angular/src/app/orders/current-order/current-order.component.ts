import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { MenuItem } from '../../menus/menus.model';
import { Order } from '../orders.model';

import { MenusService } from '../../menus/menus.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {
  currentOrder: Order
  menuItems: MenuItem[];

  constructor(private menuService: MenusService ) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(
      (response: Response) => {
        this.menuItems = response.json();
      }
    );
    this.currentOrder = {
    orderedItems: [],
    customerName: "Test",
    isClown: false,
    total: 0
    };
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
}
