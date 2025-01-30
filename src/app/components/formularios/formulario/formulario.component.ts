import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../service/formulario.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  dadosFormulario: FormGroup;
  cidades: any[] = [];
  estados: any[] = [];

  constructor(private fb: FormBuilder, private serviceCep: FormularioService) {
    this.dadosFormulario = this.fb.group({
      dadosPessoais: fb.group({
        nome: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        profissao: [null, [Validators.required, Validators.minLength(6)]],
        idade: [null, [Validators.required, Validators.minLength(2)]],
        sexo: [null, [Validators.required]],
      }),
      endereco: fb.group({
        cep: [null, [Validators.required, Validators.minLength(8)]],
        rua: [null, [Validators.required]],
        complemento: [null],
        numero: [null, [Validators.required]],
        estado: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
      }),
    });
  }

  ngOnInit() {
    this.estados = this.serviceCep.getEstados();
  }

  buscaCEP() {
    const input = event?.target as HTMLInputElement;
    const cep = input.value;

    if (!cep) return;

    this.serviceCep.getBuscaCEP(cep).subscribe({
      next: (dados) => {
        if (dados.erro) {
          alert('CEP inválido!');
        } else {
          this.dadosFormulario.patchValue({
            endereco: {
              cep: dados.cep,
              rua: dados.logradouro,
              estado: dados.uf,
              cidade: dados.localidade,
            },
          });
          this.populaEstadosECidades(dados.uf);
        }
      },
      error: (error) => {
        alert('Erro ao buscar o CEP');
        console.log(error);
      },
    });
  }

  salvarDadosFormulario() {
    console.log(this.dadosFormulario.value);
  }

  populaEstadosECidades(estadosSigla: string) {
    this.cidades = this.serviceCep.getCidades(estadosSigla);
    console.log(this.cidades);
  }

  selecionaEstado(event: Event) {
    const select = event.target as HTMLSelectElement;
    const estadoSigla = select.value;

    if (estadoSigla) {
      this.cidades = this.serviceCep.getCidades(estadoSigla);
      console.log(this.cidades);
    } else {
      this.cidades = [];
    }
  }
}
