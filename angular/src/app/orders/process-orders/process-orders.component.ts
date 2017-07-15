import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OrdersService } from '../orders.service';
import { Order } from '../orders.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-process-orders',
  templateUrl: './process-orders.component.html',
  styleUrls: ['./process-orders.component.css'],
  animations: [
    trigger("reject-trigger", [
      state('initial', style({
        transform: 'translateX(0px)'
      })),
      state('rejecting', style({
        transform: 'translateX(100px)'
      })),
      transition("reject-trigger=> rejecting", animate(200))
    ])
  ]
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