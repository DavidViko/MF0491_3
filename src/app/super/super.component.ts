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
  carrito: Carrito;
  precioConOferta: number;
  cantidad: number;

  constructor(public superService: SuperService) {
    console.log("Constructor Super");
    this.supermercado = [];
    this.prodSelec = new Producto('', 0);
    this.carrito = new Carrito();
  }

  ngOnInit() {
    console.log('SuperComponent onInit');
    this.supermercado = this.superService.getAll();
    console.log('Array productos cargado');
  }

  /**
   * Disminuir la cantidad del producto
   */
  restarCantidad(producto: Producto) {
    if (producto.cantidad > 1) {
      producto.cantidad = producto.cantidad - 1;
    }
  }

  /**
   * Incrementar la cantidad del producto
   */
  sumarCantidad(producto: Producto) {
    producto.cantidad = producto.cantidad + 1;
  }

  /**
     * Añade el producto recibido de ProductoComponent tantas veces se especificó en sus unidades
     * @param producto : se pasa el producto que se va a añadir al carrito
     */
  agregarCarrito(producto: Producto) {
    console.log('SupermercadoComponent agregarCarrito %o', producto);
    this.carrito.productos.push(producto);
    this.carrito.subtotal = this.carrito.subtotal + producto.precio * producto.cantidad;
    this.carrito.numProductos = this.carrito.numProductos + producto.cantidad;
    if (producto.oferta != 0) {
      this.precioConOferta = producto.precio - (producto.precio * producto.oferta / 100);
      this.carrito.precio = this.carrito.precio + this.precioConOferta * producto.cantidad;
      this.carrito.descuentos = this.carrito.descuentos + producto.precio * producto.oferta / 100;
    } else {
      this.carrito.precio = this.carrito.precio + producto.precio * producto.cantidad;
    }
    this.carrito.total = this.carrito.subtotal - this.carrito.descuentos;
  }

    // Vacío  carrito 
    vaciarCarrito() {
    this.carrito = new Carrito();
    }

}




