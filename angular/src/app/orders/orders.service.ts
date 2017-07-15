import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { Order } from "./orders.model";
import * as firebase from 'firebase';
    

@Injectable()
export class OrdersService {

  constructor(private http: Http, private authService: AuthService ) { 
  }

  getOrders() {
    const token = this.authService.getIdToken();
    return this.http.get("https://carnival-pos.firebaseio.com/orders.json?auth=" + token);
  }

  addOrders(order: Order) {
    return this.http.post("https://carnival-pos.firebaseio.com/orders.json", order);
  }

  // persistOrders(orders: Order[]) {
  //   const token = this.authService.getIdToken();
  //   this.http.put("https://carnival-pos.firebaseio.com/orders.json?auth=" + token, orders).subscribe();
  // }
  rejecOrder(order: Order) {
    const database = firebase.database();
    const token = this.authService.getIdToken();
    return database.ref("orders/" + order.name).remove();
  }

  acceptOrder(order: Order) {
    const database = firebase.database();
    const token = this.authService.getIdToken();
    order.processed = true;
    return database.ref("orders/" + order.name).update(order);
  }
}