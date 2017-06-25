import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth/auth.service';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { MenuService } from './services/menu.service';
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
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
