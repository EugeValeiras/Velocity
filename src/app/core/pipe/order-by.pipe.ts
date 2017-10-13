import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, propName: string, extra: string): Array<any> {
    array.sort((elem: any, next: any) => {
      const elemProp  = propName ? elem[propName] : elem;
      const nextProp = propName ? next[propName] : next;
      const reverse = extra === 'reverse';

      return (elemProp < nextProp) ? (reverse ? 1 : -1) : (reverse ? -1 : 1);
    });
    return array;
  }

}
