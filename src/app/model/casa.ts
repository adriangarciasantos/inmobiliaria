import { Servicio } from './servicio';

export class Casa {

    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _alquiler: boolean;
    private _habitaciones: number;
    private _foto: string;
    private _direccion: string;
    private _servicios: Servicio[];

    constructor(){
        this.id = -1;
        this.nombre = '';
        this.precio = 0;
        this.alquiler = false;
        this.habitaciones = 0;
        this.foto = '';
        this.direccion = '';
        this.servicios = [];
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    
    public get alquiler(): boolean {
        return this._alquiler;
    }
    public set alquiler(value: boolean) {
        this._alquiler = value;
    }
    
    public get habitaciones(): number {
        return this._habitaciones;
    }
    public set habitaciones(value: number) {
        this._habitaciones = value;
    }
    
    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }
    
    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
    
    public get servicios(): Servicio[] {
        return this._servicios;
    }
    public set servicios(value: Servicio[]) {
        this._servicios = value;
    }

}
