import { Injectable } from '@angular/core';
import { MenuItem, MenuItemImpl } from './menus.model';
import * as firebase from 'firebase';

@Injectable()
export class MenusService {
  menuItems: MenuItem[];
  database: firebase.database.Database;

  constructor() { 
    this.database = firebase.database();
  }

  getMenuItems() {
    return this.database.ref("menu-item/");
    
  }

  persistMenuItems(menuItems: MenuItem[]) {
    this.database.ref("menu-item").set(menuItems).then();
  }

  buildMenuItems() {
    this.menuItems = [
      new MenuItemImpl("Large Pretzel", "", 250, "https://www.eatdrinkdeals.com/home/wp-content/uploads/2016/04/auntie-anne-free-pretzel.jpg", undefined),
      new MenuItemImpl("Small Pretzel", "", 100, "https://www.eatdrinkdeals.com/home/wp-content/uploads/2016/04/auntie-anne-free-pretzel.jpg", undefined),
      new MenuItemImpl("Hamburger", "", 200, "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg", 
        [
          new MenuItemImpl("Onions", "", 25, "", undefined),
          new MenuItemImpl("Cheese", "", 50, "", undefined),
          new MenuItemImpl("Bacon", "", 75, "", undefined),
          new MenuItemImpl("Extra Paddy", "", 100, "", undefined)
        ]
      ),
      new MenuItemImpl("Hot Dog", "", 200, "https://assets3.thrillist.com/v1/image/1734124/size/tl-horizontal_main.jpg",  
        [
          new MenuItemImpl("Saurkraut", "", 25, "", undefined),
          new MenuItemImpl("Cheese", "", 50, "", undefined)
        ]
      ),
      new MenuItemImpl("Nachos", "", 250, "", undefined),
      new MenuItemImpl("Chips", "", 75, "", undefined),
      new MenuItemImpl("Drinks", "", 100, "", undefined),
      new MenuItemImpl("Blue Raspberry Cotton Candy", "", 150, "", undefined),
      new MenuItemImpl("Red Strawberry Cotton Candy", "", 150, "", undefined),
    ];
  }    
}