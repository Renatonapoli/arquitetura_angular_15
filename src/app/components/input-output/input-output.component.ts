import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  parentName = 'Renato';
  messageFromChild = '';

  handleChildMessagge(message: string) {
    this.messageFromChild = message;
  }
}
