import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { MenusRoutingModule } from './menus-routing.module';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    MenusRoutingModule
  ],
})
export class MenusModule { }
