import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class LoginRoutingModule {}/**
 * Created by Danny on 17-3-2017.
 */
