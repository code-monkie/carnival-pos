import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MenuItem, MenuItemImpl } from '../menu.model';

@Injectable()
export class OrderService {
  menuItems: MenuItem[];

  constructor(private http: Http ) { 
    this.buildMenuItems();
  }

  getBurgerMenuItem() {
    return this.menuItems[2];
  }

  persistMenuItems() {
    this.http.put("https://carnival-pos.firebaseio.com/menu-item.json", this.menuItems).subscribe();
  }

  buildMenuItems() {
    this.menuItems = [
      new MenuItemImpl("Large Pretzel", "", 250, "", null),
      new MenuItemImpl("Small Pretzel", "", 100, "", null),
      new MenuItemImpl("Hamburger", "", 200, "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg", 
        [
          new MenuItemImpl("Onions", "", 25, "", null),
          new MenuItemImpl("Cheese", "", 50, "", null),
          new MenuItemImpl("Bacon", "", 75, "", null),
          new MenuItemImpl("Extra Paddy", "", 100, "", null)
        ]
      ),
      new MenuItemImpl("Hot Dog", "", 200, "",  
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