import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
  // standalone: true,
  // pure: false,
  pure: true,
})
export class SortDataPipe implements PipeTransform {
  transform(arr: any[], property: string): any[] {
    arr.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    });

    return arr;
  }
}
