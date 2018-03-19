import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  // Atributos
  @Input('producto') producto: Producto;
  @Output() prodAgregado = new EventEmitter();
  precioConOferta: number;
  cantidad: number;

  constructor() {
    console.log('Constructor Producto');
  }

  ngOnInit() {
    console.log('onInit Producto');
    this.calcularPrecioDescuento();
    this.cantidad = 1;
  }

  calcularPrecioDescuento() {
    this.precioConOferta = this.producto.precio -(this.producto.precio * this.producto.oferta / 100);
  }

  /**
   * Disminuir la cantidad del producto
   */
  restarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad = this.cantidad - 1;
    }
  }

  /**
   * Incrementar la cantidad del producto
   */
  sumarCantidad() {
    this.cantidad = this.cantidad + 1
    
  }

  /**
   * Emite un evento al padre el producto y sus unidades
   */
  agregarCarrito() {
    console.log('ProductoComponent agregarCarrito');

    this.prodAgregado.emit({
      'producto': this.producto,
      'unidades': this.cantidad
    });
  }


}
