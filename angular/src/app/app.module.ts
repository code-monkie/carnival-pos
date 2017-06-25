import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MenusModule } from './menus/menus.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LockedComponentComponent } from './locked-component/locked-component.component';

import { MenusService } from './menus/menus.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionHistoryComponent,
    CurrentOrderComponent,
    DashboardComponent,
    NavbarComponent,
    LockedComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MenusModule,
    AuthModule
  ],
  providers: [AuthService, MenusService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
