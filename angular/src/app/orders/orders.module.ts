import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from 'ngx-loading';

import { CreateOrderComponent } from './create-order/create-order.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProcessOrdersComponent } from './process-orders/process-orders.component';
import { AvailableOrderComponent } from './process-orders/available-order/available-order.component'

import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [
    CreateOrderComponent,
    TransactionHistoryComponent,
    ProcessOrdersComponent,
    AvailableOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    LoadingModule
  ],
})
export class OrdersModule { }
