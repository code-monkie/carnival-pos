import { NgModule, ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LockedComponentComponent } from './locked-component/locked-component.component';
import { AuthGuard } from './auth/auth-guard';

const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent, pathMatch: 'full'},
  { path: "locked", component:LockedComponentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};