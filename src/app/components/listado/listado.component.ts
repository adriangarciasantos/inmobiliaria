import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/model/casa';
import { CasaService } from 'src/app/providers/casa.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  private _casas: Casa[];
  private _casa: Casa;
  private _alquiler: boolean;
  private _todas: boolean;
  private _textoFiltro: string;

  constructor(public casaService: CasaService) { 
    console.trace('ListadoComponent constructor');
    this.casas = [];
    this.casa = new Casa();
    this.alquiler = true;
    this.todas = true;
    this.textoFiltro = 'Alquiler';
    
  }

  ngOnInit() {
    console.trace('ListadoComponent ngOnInit');

    this.casaService.getAll().subscribe(data => {
      this.casas = data.map(el => el);
      this.casa = this.casas[0];
    });

  }

  cambiarCasa(c: Casa){
    console.trace('ListadoComponent cambiarCasa %o', c);
    this.casa = c;
  }

  filtrar(){
    console.trace('ComparadorComponent filtrar ' + this.alquiler);
    this.todas = false;
    this.alquiler = !this.alquiler;
    this.textoFiltro = (this.alquiler)? 'Alquiler' : 'Venta';
  }

  filtrarTodas(){
    console.trace('ComparadorComponent filtrarTodas ' + this.todas);
    this.todas = true;
  }
  
  public get casas(): Casa[] {
    return this._casas;
  }
  public set casas(value: Casa[]) {
    this._casas = value;
  }
  
  public get casa(): Casa {
    return this._casa;
  }
  public set casa(value: Casa) {
    this._casa = value;
  }

  public get alquiler(): boolean {
    return this._alquiler;
  }
  public set alquiler(value: boolean) {
    this._alquiler = value;
  }
  
  public get todas(): boolean {
    return this._todas;
  }
  public set todas(value: boolean) {
    this._todas = value;
  }
  
  public get textoFiltro(): string {
    return this._textoFiltro;
  }
  public set textoFiltro(value: string) {
    this._textoFiltro = value;
  }

}
