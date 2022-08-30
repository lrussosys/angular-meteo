import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Converter',
})
export class ConverterPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        var tempareature = value - 273.15;
        return tempareature.toFixed(0);
      }
      if (unit === 'K') {
        var tempareature = value + 273.15;
        return tempareature.toFixed(0);
      }
      if(unit ==='m/s'){
        var speed = value * 3.6;
        return speed.toFixed(0)
      }
      if(unit === 'epoch'){
        var time = new Date(value * 1000)
        time.toUTCString().toLocaleString()
        return time
      }
    }
    return;
  }
  
}
