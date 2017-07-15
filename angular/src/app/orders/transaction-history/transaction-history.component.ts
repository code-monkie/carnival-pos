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
  orderHistories: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ordersService.getOrders().then(
      (snapshot) => {
        console.log(snapshot.val());
         this.orderHistories = [];
         for (var name in snapshot.val()) {
            let orderHistory = snapshot.val()[name];
            orderHistory.name = name;
            orderHistory.processed = true;
            this.orderHistories.push(orderHistory);
         }
      }
    );
  }
}
