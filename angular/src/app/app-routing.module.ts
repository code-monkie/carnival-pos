import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './site/dashboard/dashboard.component';
import { CurrentOrderComponent } from './orders/current-order/current-order.component';
import { TransactionHistoryComponent } from './orders/transaction-history/transaction-history.component';
import { ProcessOrdersComponent } from './orders/process-orders/process-orders.component';
import { StoryComponent } from './site/story/story.component';

const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent, pathMatch: 'full'},
  { path: "order", component: CurrentOrderComponent},
  { path: "transactions", component: TransactionHistoryComponent},
  { path: "processing", component: ProcessOrdersComponent},
  { path: "menu", loadChildren: "./menus/menus.module#MenusModule"},
  { path: "story", component: StoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}