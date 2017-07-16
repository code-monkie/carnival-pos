import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './site/dashboard/dashboard.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component'
import { TransactionHistoryComponent } from './orders/transaction-history/transaction-history.component';
import { ProcessOrdersComponent } from './orders/process-orders/process-orders.component';
import { StoryComponent } from './site/story/story.component';

const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent, pathMatch: 'full'},
  { path: "story", component: StoryComponent},
  { path: "orders",  loadChildren: "./orders/orders.module#OrdersModule"},
  { path: "menu", loadChildren: "./menus/menus.module#MenusModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}