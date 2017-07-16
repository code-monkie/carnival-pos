import { Component, Input } from '@angular/core';

import { MenuItem } from '../menus.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() menuItem = undefined as MenuItem;
}
