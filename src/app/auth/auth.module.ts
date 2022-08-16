import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormioAuth, FormioAuthRoutes } from '@formio/angular/auth';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRoutes = FormioAuthRoutes({
  login: LoginComponent
});

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
