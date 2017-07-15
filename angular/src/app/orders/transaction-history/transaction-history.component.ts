import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../orders.service';
import { Order } from '../orders.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ordersService.getOrders().then(
      (snapshot) => {
        this.orders = this.ordersService.processOrderSnapshot(snapshot);
      }
    );
  }
}
