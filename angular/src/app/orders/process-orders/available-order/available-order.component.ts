import { Component, Input } from '@angular/core';

import { Order} from "../../orders.model";
import { OrdersService} from "../../orders.service";

@Component({
  selector: 'app-available-order',
  templateUrl: './available-order.component.html',
  styleUrls: ['./available-order.component.css']
})
export class AvailableOrderComponent {
  @Input() order = undefined as Order

  public constructor(private ordersService: OrdersService) { }

  public acceptOrder() {
    this.ordersService.acceptOrder(this.order).then().catch(
      error => console.log(error)
    );
  }

  public rejectOrder() {
    this.ordersService.rejecOrder(this.order).then().catch(
      error => console.log(error)
    );
  }
}
