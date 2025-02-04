import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formName',
})
export class FormatNamePipe implements PipeTransform {
  transform(value: any): string {
    return value ? value.toUpperCase() : '';
  }
}
