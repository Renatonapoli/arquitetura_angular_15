import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  url: string = `https://viacep.com.br/ws/`;

  constructor(private http: HttpClient) {}

  getBuscaCEP(cepParams: string): Observable<any> {
    const urlCep = `${this.url}/${cepParams}/json`;
    return this.http.get(urlCep);
  }
}
