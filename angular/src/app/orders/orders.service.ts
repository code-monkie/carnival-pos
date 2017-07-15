import { Injectable } from '@angular/core';
import { Order } from "./orders.model";
import * as firebase from 'firebase';
    

@Injectable()
export class OrdersService {

  constructor() { 
  }

  getOrders() {
    const database = firebase.database();
    return firebase.database().ref('orders/').once('value');
  }

  getAndListenToOrders(){
    const database = firebase.database();
    return firebase.database().ref('orders/');
  }

  addOrder(order: Order) {
    const database = firebase.database();
    return database.ref("orders/" + order.name).push(order);
  }

  rejecOrder(order: Order) {
    const database = firebase.database();
    return database.ref("orders/" + order.name).remove();
  }

  acceptOrder(order: Order) {
    const database = firebase.database();
    order.processed = true;
    return database.ref("orders/" + order.name).update(order);
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