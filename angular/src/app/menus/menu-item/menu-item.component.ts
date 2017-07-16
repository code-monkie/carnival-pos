import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from '../menus.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem = undefined as MenuItem

  constructor() { }

  ngOnInit() {
  }
}
