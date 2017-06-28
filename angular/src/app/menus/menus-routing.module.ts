import { NgModule, ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent} from './menu/menu.component';

const menusRoutes : Routes = [
  { path: "", component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(menusRoutes)],
  exports: [RouterModule]
})
export class MenusRoutingModule {};