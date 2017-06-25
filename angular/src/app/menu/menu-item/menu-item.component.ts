import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItem: MenuItem

  constructor(private orderService:  OrderService ) { }

  ngOnInit() {
    this.menuItem = this.orderService.getBurgerMenuItem();
  }
}
