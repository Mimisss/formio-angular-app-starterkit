import { Component, OnInit } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from '@formio/angular/auth';
import { Formio } from 'formiojs';
import { AppConfig } from 'src/app/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormioAuthLoginComponent implements OnInit {

  constructor(public service: FormioAuthService) { 
    super(service);    
  }

  ngOnInit(): void {
    // fetch the user login form from the resource
    Formio.createForm(document.getElementById('formio'), this.service.loginForm, {
      language: 'en',
    }).then((form) => {
      form.on('submit', (submission) => {
        // otherwise the onLogin callback set in app.component.ts is not called
        this.service.onLoginSubmit(submission);
      });

      Formio.fetch(AppConfig.appUrl + '/language/submission?data.language=el').then((response) => {
        response.json().then((result) => {
          console.log(result[0].data.translations);
          // convert array of { 'translationsKey': 'translationsTranslation' } to an object
          let translations = result[0].data.translations.reduce((obj, current) => {
            obj[current.translationsKey] = current.translationsTranslation;
            return obj;
          }, {});          
          console.log(translations);
          form.addLanguage('el', translations);
          form.language = 'el';
        });        
      });
    });
  }

}
