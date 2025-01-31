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
  logFormulario: any = null;

  constructor(private fb: FormBuilder, private serviceCep: FormularioService) {
    this.dadosFormulario = this.fb.group({
      dadosPessoais: fb.group({
        nome: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        profissao: [null, [Validators.required, Validators.minLength(3)]],
        idade: [null, [Validators.required, Validators.minLength(2)]],
        sexo: ['Masculino', [Validators.required]],
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

  buscaCEP(event: Event) {
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
      error: () => {
        alert('Erro ao buscar o CEP');
      },
    });
  }

  salvarDadosFormulario() {
    this.dadosFormulario.markAllAsTouched();

    if (this.dadosFormulario.invalid) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    this.logFormulario = this.dadosFormulario.value;
    alert('Dados enviado com sucesso!');
  }

  populaEstadosECidades(estadosSigla: string) {
    this.cidades = this.serviceCep.getCidades(estadosSigla);
  }

  selecionaEstado(event: Event) {
    const select = event.target as HTMLSelectElement;
    const estadoSigla = select.value;

    if (estadoSigla) {
      this.cidades = this.serviceCep.getCidades(estadoSigla);
    } else {
      this.cidades = [];
    }
  }
}
