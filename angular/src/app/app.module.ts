import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth-guard';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './site/dashboard/dashboard.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { StoryComponent } from './site/story/story.component';

import { OrdersService } from "./orders/orders.service";
import { MenusService } from './menus/menus.service';
import { AuthService } from './auth/auth.service';
import { CanDeactivateGuard } from "./orders/create-order/can-deactivate.service"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, 
    MenusService, 
    AuthGuard, 
    OrdersService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
