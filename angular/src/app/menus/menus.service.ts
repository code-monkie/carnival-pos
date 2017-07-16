import { Injectable } from '@angular/core';
import { MenuItem } from './menus.model';
import * as firebase from 'firebase';

@Injectable()
export class MenusService {
  menuItems: MenuItem[];
  database: firebase.database.Database;

  public constructor() { 
    this.database = firebase.database();
  }

  public getMenuItems() {
    return this.database.ref("menu-item/");
  }
}