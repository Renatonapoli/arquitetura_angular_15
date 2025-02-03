import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  alertSucesso: boolean = false;
  alertError: boolean = false;

  constructor(private servicoLogin: LoginService, private router: Router) {}

  login() {
    const emailsCadastrados = this.servicoLogin.emailsNaBase().emails;

    const emailExiste = emailsCadastrados.some(
      (emailBase: any) => emailBase.email === this.email
    );

    if (emailExiste) {
      this.alertSucesso = true;
      this.alertError = false;
      setTimeout(() => {
        this.alertSucesso = false;
        this.router.navigate(['/homeLogin']);
      }, 2000);
    } else {
      this.alertSucesso = false;
      this.alertError = true;
      setTimeout(() => {
        this.alertError = false;
      }, 2000);
    }
  }
}
