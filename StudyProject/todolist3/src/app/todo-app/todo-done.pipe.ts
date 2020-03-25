import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
