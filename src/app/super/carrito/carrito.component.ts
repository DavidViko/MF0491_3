import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../model/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  
  // Atributos
  @Input('prodCarrito') prodCarrito: Producto;
  

  constructor() {
    this.prodCarrito = new Producto('',null);
  }

  ngOnInit() {
  }

  /**
   * Disminuir la cantidad del producto
   */
  restarCantidad() {
    if (this.prodCarrito.cantidad > 1) {
      this.prodCarrito.cantidad = this.prodCarrito.cantidad - 1;
    }
  }

  /**
   * Incrementar la cantidad del producto
   */
  sumarCantidad() {
    this.prodCarrito.cantidad = this.prodCarrito.cantidad + 1
    
  }

}

