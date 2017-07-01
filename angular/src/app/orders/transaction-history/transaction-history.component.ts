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
    this.ordersService.getOrders().subscribe(
      (response: Response ) => {
        this.orderHistories = [];
        for (var name in response.json()) {
          this.orderHistories.push(response.json()[name]);
        }
        console.log(this.orderHistories);
      }
    );
  }
}
