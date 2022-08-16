import { FormioAuthConfig } from "@formio/angular/auth";

export const AppConfig = {
  appUrl: 'http://localhost:3001',
  apiUrl: 'http://api.form.io',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};