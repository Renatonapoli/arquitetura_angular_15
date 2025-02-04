import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent {
  @Input() name!: string;
  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit(` Olá, ${this.name}! Mensagem do filho`);
  }
}
