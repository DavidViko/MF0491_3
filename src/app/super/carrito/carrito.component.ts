import { Component, OnInit, Input } from '@angular/core';
import { Carrito } from '../../../model/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // Atributos
  @Input('carrito') carrito: Carrito;
  cantidad: number;
  subtotal: number;
  descuentos: number;
  total: number;
  precioConOferta: number;

  constructor() {
    this.carrito = new Carrito();
    this.cantidad = 1;
    
  }

  ngOnInit() {
  }
  
}

