import { NgModule } from '@angular/core';
import { LogFormularioComponent } from './formulario/log-formulario/log-formulario.component';
import { FormularioComponent } from '../formularios/formulario/formulario.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormularioComponent, LogFormularioComponent],
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  exports: [FormularioComponent],
})
export class FormulariosModule {}
