import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Carrito } from '../../../model/carrito';
import { Producto } from '../../../model/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // Atributos
  @Input('carrito') carrito: Producto[];
  @Input('subtotal') subtotal: number;
  @Input('descuentos') descuentos: number;
  @Input ('total') total: number;

  @Output() productoMas = new EventEmitter();
  @Output() productoMenos = new EventEmitter();
  @Output() productoBorrado = new EventEmitter();

  cantidad: number;
  
  precioConOferta: number;

  constructor() {
    this.carrito = [];
    this.cantidad = 1;

  }

  ngOnInit() {
  }

  /**
   * Sumar unidades del producto
   */
  sumarCantidad(idProdSelec: number) {
    this.carrito.forEach(element => {
      if (element.id == idProdSelec)
        element.cantidad++;
    });
    this.productoMas.emit({ carrito: this.carrito });

  }

  /**
   * Restar unidades del producto
   */
  restarCantidad(idProdSelec: number) {
    this.carrito.forEach(element => {
      if (element.id == idProdSelec && element.cantidad > 1)
        element.cantidad--;
    });
    this.productoMenos.emit({ carrito: this.carrito });
  }

  /**
   * Elimina el producto seleccionado del carrito
   */
  quitarProdCarro(idProdSelec: number) {
    this.carrito.forEach((element,index) => {
      if (element.id == idProdSelec){
        this.carrito.splice(index, 1);
      }
    });
    this.productoBorrado.emit({ element: this.carrito });
  }
}

