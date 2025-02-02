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
  erro: string = '';

  constructor(private servicoLogin: LoginService, private router: Router) {}

  login() {
    const emailsCadastrados = this.servicoLogin.emailsNaBase().emails;

    const emailExiste = emailsCadastrados.some(
      (emailBase: any) => emailBase.email === this.email
    );

    if (emailExiste) {
      alert('Login bem-sucedido!');
      this.erro = '';
      this.router.navigate(['/homeLogin']);
    } else {
      this.erro = 'Email não cadastrado';
      alert(this.erro);
    }
  }
}
