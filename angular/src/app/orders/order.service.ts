import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { Order } from "./orders.model";

@Injectable()
export class OrderService {

  constructor(private http: Http, private authService: AuthService ) { 
  }

  getOrders() {
    return this.http.get("https://carnival-pos.firebaseio.com/orders.json");
  }

  addOrders(order: Order) {
    const token = this.authService.getIdToken();
    this.http.patch("https://carnival-pos.firebaseio.com/orders.json?auth=" + token, order).subscribe();
  }

  persistOrders(orders: Order[]) {
    const token = this.authService.getIdToken();
    this.http.put("https://carnival-pos.firebaseio.com/orders.json?auth=" + token, orders).subscribe();
  }
}