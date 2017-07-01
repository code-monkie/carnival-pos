import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard';
import { TransactionHistoryComponent } from './orders/transaction-history/transaction-history.component';
import { CurrentOrderComponent } from './orders/current-order/current-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LockedComponentComponent } from './locked-component/locked-component.component';

import { OrdersService } from "./orders/orders.service";
import { MenusService } from './menus/menus.service';
import { AuthService } from './auth/auth.service';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionHistoryComponent,
    CurrentOrderComponent,
    DashboardComponent,
    NavbarComponent,
    LockedComponentComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [AuthService, MenusService, AuthGuard, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
