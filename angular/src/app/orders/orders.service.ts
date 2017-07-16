import { Injectable } from '@angular/core';
import { Order } from "./orders.model";
import * as firebase from 'firebase';
    

@Injectable()
export class OrdersService {
  database: firebase.database.Database;

  constructor() { 
    this.database = firebase.database();
  }

  getOrders() {
    return this.database.ref('orders/').once('value');
  }

  getAndListenToOrdersForProcessing(){
    return this.database.ref('orders/').orderByChild("processed").equalTo(null);
  }

  addOrder(order: Order) {
    return this.database.ref("orders/" + order.name).push(order);
  }

  rejecOrder(order: Order) {
    return this.database.ref("orders/" + order.name).remove();
  }

  acceptOrder(order: Order) {
    order.processed = true;
    return this.database.ref("orders/" + order.name).update(order);
  }

  processOrderSnapshot(snapshot) {
    let orders = [];
      for (var name in snapshot.val()) {
        let orderHistory = snapshot.val()[name];
        orderHistory.name = name;
        orderHistory.processed = true;
        orders.push(orderHistory);
    }
    return orders;
  }
}