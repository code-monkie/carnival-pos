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
}