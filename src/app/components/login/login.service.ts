import { Injectable } from '@angular/core';

import emailsCadastrados from '../../../assets/dados/verificarEmail.json'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emailsBase!: Observable<any[]>

  constructor() { }

  emailsNaBase() {
    this.emailsBase.subscribe({
      map(email => emailsCadastrados)
    })
  }

  emails() {
    emailsCadastrados.forEach()
  }

}
