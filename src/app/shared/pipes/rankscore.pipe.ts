import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankscore'
})
export class RankscorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
