import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormioAuth, FormioAuthRoutes } from '@formio/angular/auth';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ]
})
export class AuthModule { }
