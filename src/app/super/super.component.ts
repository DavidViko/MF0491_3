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
  carrito: Producto[];
  precioConOferta: number;
  precio: number;
  numProductos: number;
  subtotal: number;
  descuentos: number;
  total: number;
  visible: boolean;

  constructor(public superService: SuperService) {
    console.log("Constructor Super");
    this.supermercado = [];
    this.prodSelec = new Producto('', 0);
    this.carrito = [];
    this.numProductos = 0;

    this.subtotal = 0;
    this.descuentos = 0;
    this.total = 0;
  }

  ngOnInit() {
    console.log('SuperComponent onInit');
    this.supermercado = this.superService.getAll();
    console.log('Array productos cargado');
  }

  calcularTotales() {
    this.subtotal = 0;
    this.descuentos = 0;
    this.numProductos = 0;
    this.carrito.forEach(element => {
      this.numProductos = this.numProductos + element.cantidad;
      this.subtotal = this.subtotal + element.precio * element.cantidad;
      this.descuentos = this.descuentos + element.precio * element.oferta / 100;
    });
    this.total = this.subtotal - this.descuentos;
  }


  /**
   * Incrementar la cantidad del producto
   */
  sumarCantidad(producto: Producto) {
    producto.cantidad = producto.cantidad + 1;
    this.calcularTotales();
  }

  /**
   * Disminuir la cantidad del producto
   */
  restarCantidad(producto: Producto) {
    if (producto.cantidad > 1) {
      producto.cantidad = producto.cantidad - 1;
    }
    this.calcularTotales();
  }

  /**
   * Elimina el producto seleccionado del carrito
   */
  quitarProdCarro(idProdSelec: number) {
    this.carrito.forEach((element, index) => {
      if (element.id == idProdSelec) {
        this.carrito.splice(index, 1);
      }
    });
    this.calcularTotales();
  }

  /**
     * Añade el producto recibido de ProductoComponent tantas veces se especificó en sus unidades
     * @param producto : se pasa el producto que se va a añadir al carrito
     */
  agregarCarrito(producto: Producto) {
    let encontrado: boolean = false;
    this.precioConOferta = producto.precio - (producto.precio * producto.oferta / 100);

    console.log('SupermercadoComponent agregarCarrito %o', producto);
    if (this.carrito.length > 0) {
      this.carrito.forEach(element => {
        if (producto.id === element.id) {
          encontrado = true;
          element.cantidad = element.cantidad + producto.cantidad;
        }
      });
    }
    if (!encontrado) {
      this.carrito.push(producto);
    }
    this.calcularTotales();
  }

  mostrarCarrito() {
    this.visible = !this.visible;
  }

  // Vacío carrito 
  vaciarCarrito() {
    this.carrito = [];
    this.subtotal = 0;
    this.descuentos = 0;
    this.numProductos = 0;
    this.total = 0;
  }

}




