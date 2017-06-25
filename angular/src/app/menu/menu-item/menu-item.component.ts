import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItem: MenuItem

  constructor(private menuService:  MenuService ) { }

  ngOnInit() {
    this.menuItem = this.menuService.getBurgerMenuItem();
  }
}
