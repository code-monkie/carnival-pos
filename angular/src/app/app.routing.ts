import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';


const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "signin", component:SigninComponent},
  { path: "not-found", component:PageNotFoundComponent},
  { path: "**", redirectTo: "/not-found"}
 
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);