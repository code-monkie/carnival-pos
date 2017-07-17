import { Injectable } from '@angular/core';
import { Order } from "./orders.model";
import { Combos } from "./orders.model";
import * as firebase from 'firebase';
    

@Injectable()
export class OrdersService {
  database: firebase.database.Database;
  open: false;

  constructor() { 
    this.database = firebase.database();

    this.database.ref("open").on("value",
      snapshot => {
        this.open = snapshot.val();
      }
    );
  }

  public isOpenForBusiness() {
    return this.open;
  }

  public openForBusiness() {
    return this.database.ref("open/").set(true).then();
  }

  public closeForBusiness() {
    return this.database.ref("open/").set(false).then();
  }

  public getOrders() {
    return this.database.ref('orders/').orderByChild("processed").equalTo(true).once('value');
  }

  public getAndListenToOrdersForProcessing(){
    return this.database.ref('orders/').orderByChild("processed").equalTo(null);
  }

  public addOrder(order: Order) {
    let date = new Date();
    order.submittedTime = date.toJSON();
    return this.database.ref("orders/" + order.name).push(order);
  }

  public rejecOrder(order: Order) {
    return this.database.ref("orders/" + order.name).remove();
  }

  public acceptOrder(order: Order) {
    order.processed = true;
    console.log(firebase.auth().currentUser);
    return this.database.ref("orders/" + order.name).update(order);
  }

  public processRefund(order: Order, menuIndex: number) {
    order.total -= order.orderedItems[menuIndex].price;

    if (order.refundItems == undefined ){
      order.refundItems = [];
    }
    order.refundItems.push(order.orderedItems[menuIndex]);
    order.orderedItems.splice(menuIndex, 1);

    this.database.ref("orders/" + order.name).update(order).then();
  }

  public processOrderSnapshot(snapshot) {
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