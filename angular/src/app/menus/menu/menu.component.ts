import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(
      (response: Response) => {
        this.menuItems = response.json();
      }
    );
  }
}
