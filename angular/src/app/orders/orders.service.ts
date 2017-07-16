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
    let date = new Date();
    order.submittedTime = date.toJSON();
    return this.database.ref("orders/" + order.name).push(order);
  }

  rejecOrder(order: Order) {
    return this.database.ref("orders/" + order.name).remove();
  }

  acceptOrder(order: Order) {
    order.processed = true;
    return this.database.ref("orders/" + order.name).update(order);
  }

  processRefund(order: Order, menuIndex: number) {
    order.total -= order.orderedItems[menuIndex].price;

    if (order.refundItems == null ){
      order.refundItems = [];
    }
    order.refundItems.push(order.orderedItems[menuIndex]);
    order.orderedItems.splice(menuIndex, 1);

    this.database.ref("orders/" + order.name).update(order).then();
  }

  processOrderSnapshot(snapshot) {
    let orders = [];
      for (var name in snapshot.val()) {
        let order = snapshot.val()[name];
        order.name = name;
        order.processed = true;
        orders.push(order);
    }

    return orders.sort(function(a,b) { 
      return new Date(a.submittedTime).getTime() - new Date(b.submittedTime).getTime() 
    });
  }
}