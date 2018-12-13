import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alquiler'
})
export class AlquilerPipe implements PipeTransform {

  transform(value: any, alquiler: boolean, todas?: boolean): any {

    if(todas){
      return value.filter(el => el);
    }

    else if(alquiler){
      return value.filter(el => el.alquiler === true);
    
    }else{
      return value.filter(el => el.alquiler === false);
    }
  }

}
