import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard';
import { TransactionHistoryComponent } from './orders/transaction-history/transaction-history.component';
import { CurrentOrderComponent } from './orders/current-order/current-order.component';
import { NavbarComponent } from './navbar/navbar.component';

import { OrdersService } from "./orders/orders.service";
import { MenusService } from './menus/menus.service';
import { AuthService } from './auth/auth.service';
import { StoryComponent } from './story/story.component';
import { ProcessOrdersComponent } from './orders/process-orders/process-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionHistoryComponent,
    CurrentOrderComponent,
    DashboardComponent,
    NavbarComponent,
    StoryComponent,
    ProcessOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, MenusService, AuthGuard, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
