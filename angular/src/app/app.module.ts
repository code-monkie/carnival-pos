import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { Routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { OrderService } from './services/order.service';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionHistoryComponent,
    CurrentOrderComponent,
    DashboardComponent,
    MenuItemComponent,
    MenuComponent,
    SigninComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
