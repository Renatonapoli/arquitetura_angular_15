import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'log-formulario',
  templateUrl: './log-formulario.component.html',
  styleUrls: ['./log-formulario.component.css'],
})
export class LogFormularioComponent {
  @Input() logFormulario!: FormGroup;
}
