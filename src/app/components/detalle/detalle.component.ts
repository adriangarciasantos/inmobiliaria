import { Component, OnInit, Input } from '@angular/core';
import { Casa } from 'src/app/model/casa';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  _casa: Casa;

  constructor() {
    console.trace('DetalleComponent constructor');
  }

  ngOnInit() {
    console.trace('DetalleComponent ngOnInit');
  }

  get casa(): Casa {
    return this._casa;
  }

  @Input('_casa') set casa(value: Casa) {
    if(value){
      this._casa = value;
    
    }else{
      console.debug('casa undefined => new Casa()');
      this._casa = new Casa();
    }
    
  }

}
