import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import estados from '../../../../assets/dados/estadosbr.json';
import cidades from '../../../../assets/dados/cidades.json';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  url: string = `https://viacep.com.br/ws/`;

  constructor(private http: HttpClient) {}

  getBuscaCEP(cepParams: string): Observable<any> {
    const urlCep = `${this.url}/${cepParams}/json`;
    return this.http.get(urlCep).pipe(
      map((response) => {
        console.log('Resposta do ViaCep', response);
        return response;
      })
    );
  }

  getEstados(): any[] {
    return estados;
  }

  getCidades(siglaEstado: string): any[] {
    const estadoEncontrado = estados.find(
      (estado) => estado.sigla === siglaEstado
    );

    if (!estadoEncontrado) {
      console.warn('Estado não encontrado para a silga:' + siglaEstado);
      return [];
    }

    const estadoId = estadoEncontrado.id;

    return cidades.filter((cidade) => cidade.estado == estadoId);
  }
}
