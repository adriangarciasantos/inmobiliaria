import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: any, minPrecio: number, maxPrecio: number): any {
    return value.filter(el => el.precio >= minPrecio && el.precio <= maxPrecio);
  }

}
