import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { SuperService } from '../providers/super.service';
import { } from 'events';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements OnInit {

  supermercado: Producto[];
  prodSelec : Producto;
  searchText: string;

  constructor(public superService: SuperService) {
    console.log("Constructor Super");
    this.supermercado = [];
    this.prodSelec = new Producto('', 0);
  }

  ngOnInit() {
    console.log('SuperComponent onInit');
    this.supermercado = this.superService.getAll();
    console.log('Array productos cargado');
  }
}
  

  //   //********* Llamadas a los Servicios ******************
    
  //   recibirCoche(event){
  //     console.log("ConcesionarioComponent: Recibimos evento del Componente Hijo %o", event.coche);
  //     this.coche2 = this.coche1;
  //     this.coche1 = event.coche;
      
  //   }
  // }

  // seleccionar($event, casa: Casa) {
  //   this.casaSelec = casa;
  //   console.log("InmobiliariaComponent: Emitimos evento al Componente hijo %o", this.casaSelec);
  // }



