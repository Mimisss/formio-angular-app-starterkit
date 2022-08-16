import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfig, AuthConfig } from './config';
import { FormioAppConfig } from '@formio/angular';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig},
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
