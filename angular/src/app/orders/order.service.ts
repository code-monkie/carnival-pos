import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { OrderItem } from "./orders.model";

@Injectable()
export class OrderService {

  constructor(private http: Http, private authService: AuthService ) { 
  }

  getOrders() {
    return this.http.get("https://carnival-pos.firebaseio.com/orders.json");
  }

  addOrders(order: OrderItem) {
    const token = this.authService.getIdToken();
    // use patch for individual items.
    this.http.patch("https://carnival-pos.firebaseio.com/orders.json?auth=" + token, order).subscribe();
  }

  persistOrders(orders: OrderItem[]) {
    const token = this.authService.getIdToken();
    // use patch for individual items.
    this.http.put("https://carnival-pos.firebaseio.com/orders.json?auth=" + token, orders).subscribe();
  }
}