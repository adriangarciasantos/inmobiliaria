import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  casas: Casa[];
  endpoint: string = 'http://localhost:3000/casas';

  constructor(public http: HttpClient) {
    console.trace('CasaService constructor');
    this.casas = [];
  }

  getAll():Observable<any>{
    console.trace('CasaService getAll ' + this.endpoint);
    return this.http.get(this.endpoint);
  }

  crear(casa: Casa): Observable<any>{

    console.trace('FrutaService crear %o', casa);

    let body = 	{
      "nombre": casa.nombre,
      "precio": casa.precio,
      "alquiler": casa.alquiler,
      "habitaciones": casa.habitaciones,
      "foto": casa.foto,
      "direccion": casa.direccion,
      "servicios": casa.servicios
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Conten-Type': 'application/json'
      })
    };

    return this.http.post(this.endpoint, body, httpOptions);

  }

}
