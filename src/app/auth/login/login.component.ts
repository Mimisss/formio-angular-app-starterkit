import { Component, OnInit } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from '@formio/angular/auth';
import { Formio } from 'formiojs';

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
      language: 'el',
      i18n: {
        el: {
          'Email': 'Ηλεκτρονικό ταχυδρομείο'
        }
      }
    });
  }

}
