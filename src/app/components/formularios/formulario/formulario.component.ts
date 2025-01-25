import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Input() dadosFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dadosFormulario = this.fb.group({
      dadosPessoais: fb.group({
        nome: [null],
        email: [null],
        profissao: [null],
        idade: [null],
        sexo: [null],
      }),
      endereco: fb.group({
        cep: [null],
        rua: [null],
        complemento: [null],
        numero: [null],
        estado: [null],
        cidade: [null],
      }),
    });
  }

  salvarDadosFormulario() {
    console.log(this.dadosFormulario.value);
  }
}
