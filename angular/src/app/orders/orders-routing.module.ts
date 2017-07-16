import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderComponent } from './create-order/create-order.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProcessOrdersComponent } from './process-orders/process-orders.component';

const menusRoutes : Routes = [
  { path: "create", component: CreateOrderComponent},
  { path: "transactions", component: TransactionHistoryComponent},
  { path: "processing", component: ProcessOrdersComponent},
];


@NgModule({
  imports: [RouterModule.forChild(menusRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {};