import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataConverter'
})
export class DataConverterPipe implements PipeTransform {
  transform(value: any, type: string): any {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (type === 'hour') {
      return new Date(value * 1000).getHours();
    } else if (type === 'day') {
      return weekday[new Date(value * 1000).getDay()];
    }
  }
}
