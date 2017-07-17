import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../orders.model';

@Component({
  selector: 'app-process-orders',
  templateUrl: './process-orders.component.html',
  styleUrls: ['./process-orders.component.css']
})

export class ProcessOrdersComponent implements OnInit {

  orders: Order[];

  constructor(public ordersService: OrdersService) { }

  public ngOnInit() {
    this.ordersService.getOrdersForProcessing().on("value", 
      snapshot => {
        this.orders = this.ordersService.processOrderSnapshot(snapshot);
      }
    );
  }
}