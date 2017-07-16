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

  constructor(private ordersService: OrdersService) { }

  public ngOnInit() {
    this.refreshOrders();
  }

  public acceptOrder(order: Order) {
    this.ordersService.acceptOrder(order).then(
      ()=>{
        this.refreshOrders();
      }
    );
  }

  public rejectOrder(order: Order) {
    this.ordersService.rejecOrder(order).then(
      ()=>{
        this.refreshOrders();
      }
    );
  }

  private refreshOrders() {
    this.ordersService.getAndListenToOrdersForProcessing().on("value", 
      snapshot => {
        this.orders = this.ordersService.processOrderSnapshot(snapshot);
      }
    );
  }
}