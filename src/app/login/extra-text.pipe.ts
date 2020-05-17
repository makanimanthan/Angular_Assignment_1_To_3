import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extraText'})
export class ExtraTextPipe implements PipeTransform {
  transform(value: string): string {
    return value + ' - Extra Text from Pipe';
  }
}