import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../menus/menus.model';
import { Order } from '../orders.model';
import { OrdersService} from '../orders.service'
import { MenusService } from '../../menus/menus.service';
import { CanComponentDeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, CanComponentDeactivate {
  currentOrder: Order;
  menuItems: MenuItem[];
  loading: boolean = true;

  constructor(private menuService: MenusService, public ordersService: OrdersService ) { }

  public ngOnInit() {
    this.menuService.getMenuItems().once("value").then(
      (snapshot) => {
        this.menuItems = snapshot.val();
        this.loading = false;
      }).catch(
        error => console.log(error)
      );
    this.initializeCurrentOrder();
  }

  private initializeCurrentOrder() {
    this.currentOrder = {
      name: "", orderedItems: [], refundItems: [], customerName: "Test", isClown: false, total: 0, submittedTime: undefined,
    };
  }
  
  public addItemToOrder(menuItem: MenuItem) {

    
    this.currentOrder.orderedItems.push({
      name: menuItem.name, price: menuItem.price, imageUrl: "", description: "", 
        returnable: menuItem.returnable == undefined ? false : menuItem.returnable,
        extras: this.isCombo(menuItem) ? menuItem.extras : []
    });

    if (menuItem.maxPerOrder != undefined) {
      menuItem.maxPerOrder -= 1;
    }
   
    this.currentOrder.total += menuItem.price;
  }

  public isCombo(menuItem: MenuItem) {
    return menuItem.name.indexOf('Combo') > 0;
  }

  public removeItemFromOrder(index: number) {
    let itemToRemove = this.currentOrder.orderedItems[index];
    this.currentOrder.total = this.currentOrder.total - itemToRemove.price;
    this.restoreCountForMaxPerOrder(itemToRemove);
    this.currentOrder.orderedItems.splice(index, 1);
  }

  private restoreCountForMaxPerOrder(menuItemToUpdate: MenuItem) {
    this.menuItems.forEach(menuItem => {
      if (menuItem.name === menuItemToUpdate.name && menuItem.maxPerOrder != undefined) {
        menuItem.maxPerOrder += 1;
      }
    });
  }

  public submitOrder() {
    if (this.ordersService.isOpenForBusiness()){
      let name = window.prompt("Please enter a name for this order.");
      if (name != null){
        this.currentOrder.customerName = name;
        this.ordersService.addOrder(this.currentOrder).then(
          () => this.clearOrder()
        ).catch (
          error => console.log(error)
        );
      }
    } 
    else {
      window.alert("Sorry! The Cafe' is close!");
    }

  }

  public clearOrder() {
      this.currentOrder.orderedItems.forEach(
        menuItem => this.restoreCountForMaxPerOrder(menuItem)
      );
      this.initializeCurrentOrder();
  }

  public canDeactivate() {
    if (this.currentOrder.orderedItems.length === 0) {
      return true;
    }
    return window.confirm('You haven\'t submitted your order. Do you really want to leave the page??');
  }
}