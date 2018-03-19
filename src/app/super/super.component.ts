import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { Carrito } from '../../model/carrito';
import { SuperService } from '../providers/super.service';
import { } from 'events';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements OnInit {

  supermercado: Producto[];
  prodSelec: Producto;
  searchText: string;

  cantidad: number;
  carrito: Producto[];
  subtotal: number;
  descuentos: number;
  total: number;

  constructor(public superService: SuperService) {
    console.log("Constructor Super");
    this.supermercado = [];
    this.prodSelec = new Producto('', 0);
    this.cantidad = 1;
    this.carrito = [];
    this.subtotal = 0;
    this.descuentos = 0;
    this.total = 0;
  }

  ngOnInit() {
    console.log('SuperComponent onInit');
    this.supermercado = this.superService.getAll();
    console.log('Array productos cargado');
  }

  /**
   * Añade el producto recibido de ProductoComponent tantas veces se especificó en sus unidades
   * @param event : objeto recibido con el producto y su número de unidades
   */
  agregarCarrito(event) {
    console.log('SupermercadoComponent agregarCarrito %o', event);

    for (let i = 0; i < event.unidades; i++) {
      this.carrito.push(event.producto);
      if (event.producto.oferta != 0) {
        this.descuentos = this.descuentos + event.producto.precio * (event.producto.oferta / 100);
      }
      this.subtotal = this.subtotal + event.producto.precio;

    }
    this.total = this.subtotal - this.descuentos;
  }


}




