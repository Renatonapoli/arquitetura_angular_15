import { Injectable } from '@angular/core';

import emailsCadastrados from '../../../../assets/dados/verificarEmail.json';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  emailsNaBase() {
    return emailsCadastrados;
  }
}
