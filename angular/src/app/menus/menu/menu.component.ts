import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menus.model';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private menuService: MenusService ) { }

  public ngOnInit() {
    this.menuService.getMenuItems().once("value")
      .then(
        (snapshot) => {
          this.menuItems = snapshot.val();
        }
      )
      .catch (
        error => console.log(error)
      );
  }
}
