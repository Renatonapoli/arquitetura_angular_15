import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioService } from '../service/formulario.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  dadosFormulario: FormGroup;

  constructor(private fb: FormBuilder, private serviceCep: FormularioService) {
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

  ngOnInit() {}

  buscaCEP() {
    const cep = this.dadosFormulario.get('endereco.cep')?.value;

    this.serviceCep.getBuscaCEP(cep).subscribe({
      next: (dados) => {
        if (dados.error) {
          alert('CEP inválido!');
        } else {
          this.dadosFormulario.patchValue({
            endereco: {
              cep: dados.cep,
              rua: dados.logradouro,
              estado: dados.estado,
              cidade: dados.localidade,
            },
          });
        }
      },
      error: (error) => {
        alert('Erro ao buscar o CEP');
        console.log(error);
      },
      complete: () => {
        alert('Por favor, insira um CEP válido.');
      },
    });
  }

  salvarDadosFormulario() {
    console.log(this.dadosFormulario.value);
  }
}
