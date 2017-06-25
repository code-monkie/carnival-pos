import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../auth/auth.service";
import { MenusService } from "../menus/menus.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private menusService: MenusService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/dashboard"]);
  }

  saveMenu() {
    this.menusService.persistMenuItems();
  }
}
