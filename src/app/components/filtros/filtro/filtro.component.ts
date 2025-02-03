import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent {
  listaNomes: string[] = ['Renato', 'Especialista', 'Zup Innovation'];
  listaFiltrada: string[] = [...this.listaNomes];
  valor: string = '';

  filtraLista(valorDigitado: string) {
    if (!valorDigitado) {
      this.listaFiltrada = [...this.listaNomes];
    }
    this.listaFiltrada = this.listaNomes.filter((nome) =>
      nome.toLowerCase().includes(valorDigitado.toLowerCase())
    );
  }
}
