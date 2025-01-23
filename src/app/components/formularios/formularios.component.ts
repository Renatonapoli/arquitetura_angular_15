import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent {
  dadosFormulario!: FormGroup;

  ngOnInit() {
    this.dadosFormulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      endereco: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  constructor(private fb: FormBuilder) {}

  get nome() {
    return this.dadosFormulario.get('nome');
  }

  get endereco() {
    return this.dadosFormulario.get('endereco');
  }

  onSubmit() {
    if (this.dadosFormulario.valid) {
      console.log(this.dadosFormulario.value);
    }
    console.log('Dados inváidos!');
  }
}
