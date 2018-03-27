import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;
    const date = new Date(value);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }
}
