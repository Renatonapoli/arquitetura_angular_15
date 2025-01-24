import { NgModule } from '@angular/core';
import { LogFormularioComponent } from './formulario/log-formulario/log-formulario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [FormularioComponent, LogFormularioComponent],
  imports: [RouterLink],
  exports: [FormularioComponent],
})
export class FormulariosModule {}
