import { NgModule } from '@angular/core';
import { LogFormularioComponent } from './formulario/log-formulario/log-formulario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioComponent, LogFormularioComponent],
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  exports: [FormularioComponent],
})
export class FormulariosModule {}
