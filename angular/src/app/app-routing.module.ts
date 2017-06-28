import { NgModule, ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StoryComponent } from './story/story.component';
import { CurrentOrderComponent } from './orders/current-order/current-order.component';
import { LockedComponentComponent } from './locked-component/locked-component.component';
import { AuthGuard } from './auth/auth-guard';

const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent, pathMatch: 'full'},
  { path: "menu", loadChildren: "./menus/menus.module#MenusModule"},
  { path: "story", component: StoryComponent},
  { path: "order", component: CurrentOrderComponent},
  { path: "locked", component:LockedComponentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}