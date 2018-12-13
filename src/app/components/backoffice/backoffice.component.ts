import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/model/casa';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CasaService } from 'src/app/providers/casa.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  formulario: FormGroup;  //Formulario para agrupar inputs == FormControl
  servicios: FormArray;     //Array de FormControl
  msg: string;
  casa: Casa;

  constructor(public casaService: CasaService, private route: ActivatedRoute) { 
    this.casa = new Casa();

    const patronImg: string = '^(http(s?):\/\/).+(\.(jpg|png|jpeg))$';

    this.formulario = new FormGroup({
      nombre: new FormControl(
                              '',            
                              [               
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(50)
                              ]
                              ),
      precio: new FormControl(
                              '0',            //Valor inicial
                              [               //Validaciones
                                Validators.required,
                                Validators.min(0.01),
                                Validators.max(5000000)
                              ]
                              ),
      alquiler: new FormControl(false),

      habitaciones: new FormControl(
                                  '1',
                                  [
                                    Validators.required,
                                    Validators.min(1),
                                    Validators.max(1000)
                                  ]
                                  ),
      foto: new FormControl(
                            'https://picsum.photos/125/?random.png',            
                            [               
                              Validators.required,
                              Validators.pattern(patronImg)
                            ]
                            ),
      direccion: new FormControl(
                              '',            //Valor inicial
                              [ 
                                Validators.minLength(1),
                                Validators.maxLength(999)
                              ]
                              ),
      servicios: new FormArray([], Validators.minLength(1))

    });

    this.msg = '';

  }

  ngOnInit() {
  }

  crearServicioFormGroup(servicio?:Servicio): FormGroup{

    if(servicio === undefined){
      servicio = new Servicio();
    }

    return new FormGroup({
      servicio: new FormControl(
                              servicio.nombre, [
                              Validators.required, 
                              Validators.minLength(2), 
                              Validators.maxLength(25)
                              ])
    });
  }

  nuevoServicio(){
    let arrayServicios = this.formulario.get('servicios') as FormArray;
    arrayServicios.push(this.crearServicioFormGroup());
  }

  eliminarServicio(index: number){
    let arrayServicios = this.formulario.get('servicios') as FormArray;
    
    if(arrayServicios.length > 1){
      arrayServicios.removeAt(index);
    }
    
  }

  cargarDatosFormulario(){
    this.formulario.controls.nombre.setValue(this.casa.nombre);
    this.formulario.controls.precio.setValue(this.casa.precio);
    this.formulario.controls.alquiler.setValue(this.casa.alquiler);

    this.formulario.controls.habitaciones.setValue(this.casa.habitaciones);
    this.formulario.controls.foto.setValue(this.casa.foto);
    this.formulario.controls.direccion.setValue(this.casa.direccion);
    
    let arrayServicios = this.formulario.get('servicios') as FormArray;

    this.casa.servicios.forEach(servicio =>{
      arrayServicios.push(this.crearServicioFormGroup(servicio));
    });

    this.formulario.controls.servicios.setValue(this.casa.servicios);

  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);

    let casa = new Casa();
    casa.nombre = this.formulario.controls.nombre.value;
    casa.precio = this.formulario.controls.precio.value;
    casa.alquiler = this.formulario.controls.alquiler.value;

    this.formulario.controls.servicios.value.forEach(el => {
      let servicio = new Servicio();
      servicio.nombre = el.servicio;
      casa.servicios.push(servicio);
    });

    casa.habitaciones = this.formulario.controls.habitaciones.value;
    casa.foto = this.formulario.controls.foto.value;
    casa.direccion = this.formulario.controls.direccion.value;

    
    this.casaService.crear(casa).subscribe(data =>{
      console.debug('data %o', data);
      this.msg = `${casa.nombre} creada correctamente`;
    });

    console.debug('Llamar provider pasando la casa %o', casa);

  }

}
