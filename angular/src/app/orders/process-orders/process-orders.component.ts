import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../orders.service';
import { Order } from '../orders.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-process-orders',
  templateUrl: './process-orders.component.html',
  styleUrls: ['./process-orders.component.css']
})
export class ProcessOrdersComponent implements OnInit {

  orderHistories: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.refresh();
  }

  acceptOrder(order: Order) {
    this.ordersService.acceptOrder(order).then(
      ()=>{
        this.refresh();
      }
    );
  }

  rejectOrder(order: Order) {
    this.ordersService.rejecOrder(order).then(
      ()=>{
        this.refresh();
      }
    );
  }

  refresh() {
    this.ordersService.getOrders().subscribe(
      (response: Response) => {
        this.orderHistories = [];
        for (var name in response.json()) {
          let orderHistory = response.json()[name];
          orderHistory.name = name;
          orderHistory.processed = true;
          this.orderHistories.push(orderHistory);
        }
      }
    );
  }
}