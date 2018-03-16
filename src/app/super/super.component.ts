import { Component, OnInit } from '@angular/core';
import { } from 'events';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements OnInit {

  super: Producto[];
  prodSelec : Producto;

  constructor() {
    console.log("Constructor Super");
    this.super = [];
    this.prodSelec = new Producto('', 0);
  }

  ngOnInit() {
    console.log('SuperComponent onInit');
    // this.cargarSuper();
  }

  // cargarSuper() {
  //   this.casasService.getAll().subscribe(
  //     resultado => {
  //       console.debug('peticion correcta %o', resultado);
  //       this.mapeo(resultado);
  //       this.casaSelec = this.casas[0] || new Casa ('', 0);
  //       this.modo = "todos";
  //       this.precioMax = 0;
  //       this.precioMin = 0;
  //     },
  //     error => {
  //       console.warn('peticion incorrecta %o', error);
  //     }
  
  //   );//final subscribe   
  // } //final cargarCasas



}






  constructor(public casasService: CasasService) {
    console.log("Constructor Casas");
    this.casas = [];
    this.casaSelec = new Casa('', 0);
  }


  

  /**
   * Mapea los Datos en formato Json a TODO que proviene del Servicio Rest
   * @param resul 
   */
  mapeo(resul: any) {
    let casa: Casa;
    resul.forEach(element => {
      casa = new Casa(element.nombre, element.precio);
      casa.id = element.id;
      casa.alquiler = element.alquiler;
      casa.habitaciones = element.habitaciones;
      casa.foto = element.foto;
      casa.direccion = element.direccion;
      casa.servicios = element.servicios;
      this.casas.push(casa);

    });
  }// final mapeo

  seleccionar($event, casa: Casa) {
    this.casaSelec = casa;
    console.log("InmobiliariaComponent: Emitimos evento al Componente hijo %o", this.casaSelec);
  }

}


