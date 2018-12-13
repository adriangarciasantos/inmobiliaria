import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoVivienda'
})
export class TipoViviendaPipe implements PipeTransform {

  transform(value: any, alquiler: boolean, todas: boolean,venta: boolean): any {

    if(todas){
      return value.filter(el => el);
    }

    else if(alquiler){
      return value.filter(el => el.alquiler === true);
    
    }else if(venta){
      return value.filter(el => el.alquiler === false);
    }
  }

}
