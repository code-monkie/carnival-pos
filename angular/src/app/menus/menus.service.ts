import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenuItem, MenuItemImpl } from './menus.model';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class MenusService {
  menuItems: MenuItem[];

  constructor(private http: Http, private authService: AuthService ) { 
  }

  getMenuItems() {
    const database = firebase.database();
    return database.ref("menu-item/");
    
  }

  persistMenuItems(menuItems: MenuItem[]) {
    const database = firebase.database();
    const token = this.authService.getIdToken();
    this.http.put("https://carnival-pos.firebaseio.com/menu-item.json?auth=" + token, menuItems).subscribe();
  }

  buildMenuItems() {
    this.menuItems = [
      new MenuItemImpl("Large Pretzel", "", 250, "https://www.eatdrinkdeals.com/home/wp-content/uploads/2016/04/auntie-anne-free-pretzel.jpg", null),
      new MenuItemImpl("Small Pretzel", "", 100, "https://www.eatdrinkdeals.com/home/wp-content/uploads/2016/04/auntie-anne-free-pretzel.jpg", null),
      new MenuItemImpl("Hamburger", "", 200, "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg", 
        [
          new MenuItemImpl("Onions", "", 25, "", null),
          new MenuItemImpl("Cheese", "", 50, "", null),
          new MenuItemImpl("Bacon", "", 75, "", null),
          new MenuItemImpl("Extra Paddy", "", 100, "", null)
        ]
      ),
      new MenuItemImpl("Hot Dog", "", 200, "https://assets3.thrillist.com/v1/image/1734124/size/tl-horizontal_main.jpg",  
        [
          new MenuItemImpl("Saurkraut", "", 25, "", null),
          new MenuItemImpl("Cheese", "", 50, "", null)
        ]
      ),
      new MenuItemImpl("Nachos", "", 250, "", null),
      new MenuItemImpl("Chips", "", 75, "", null),
      new MenuItemImpl("Drinks", "", 100, "", null),
      new MenuItemImpl("Blue Raspberry Cotton Candy", "", 150, "", null),
      new MenuItemImpl("Red Strawberry Cotton Candy", "", 150, "", null),
    ];
  }    
}