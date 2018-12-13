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
  private _venta: boolean;
  private _todas: boolean;
  private _minPrecio: number;
  private _maxPrecio: number;

  constructor(public casaService: CasaService) { 
    console.trace('ListadoComponent constructor');
    this.casas = [];
    this.casa = new Casa();
    this.alquiler = false;
    this.venta = false;
    this.todas = true;
    this.minPrecio = 1;
    this.maxPrecio = 100000000;
    
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

  filtrarAlquiler(){
    console.trace('ComparadorComponent filtrarAlquiler ' + this.alquiler);
    this.todas = false;
    this.alquiler = true;
    this.venta = false;
  }

  filtrarVenta(){
    console.trace('ComparadorComponent filtrarVenta ' + this.venta);
    this.todas = false;
    this.alquiler = false;
    this.venta = true;
  }

  filtrarTodas(){
    console.trace('ComparadorComponent filtrarTodas ' + this.todas);
    this.todas = true;
    this.alquiler = false;
    this.venta = false;
  }

  filtrarPrecio(){

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
  
  public get minPrecio(): number {
    return this._minPrecio;
  }
  public set minPrecio(value: number) {
    this._minPrecio = value;
  }
  
  public get maxPrecio(): number {
    return this._maxPrecio;
  }
  public set maxPrecio(value: number) {
    this._maxPrecio = value;
  }
  
  public get venta(): boolean {
    return this._venta;
  }
  public set venta(value: boolean) {
    this._venta = value;
  }

}
