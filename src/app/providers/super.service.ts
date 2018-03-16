import { Injectable } from '@angular/core';
import { MOCKS_SUPER } from './mocks.super';
import { element } from 'protractor';
import { Producto } from '../../model/producto';

@Injectable()
export class SuperService {

  super: Producto[];
  constructor() {
    console.log('SuperService constructor');
    this.super = [];
  }

  /**
   * Obtener todos los productos del listado del proveedor (Mocks)
   */
  getAll(): Producto[] {
    console.log('SuperService getAll');
    let prod;

    let jsonData = JSON.parse(MOCKS_SUPER.stock);

    jsonData.forEach(element => {
      prod = new Producto(
        element.nombre,
        element.precio,
        element.precioUnidad,
        element.oferta,
        element.foto,
        element.unidad,
        element.id,
      );
      this.super.push(prod);
    });
    return this.super;
  }

}