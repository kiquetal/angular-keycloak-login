import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MainLayoutComponent} from "./components/main/main.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./guard/auth.guard";

export const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:''},
];
