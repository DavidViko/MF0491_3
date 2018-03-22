import { Producto } from "./producto";

export class Carrito {
    productos: Producto[];
    numProductos: number;
    precio: number;
    subtotal:number;
    descuentos:number;
    total:number;

    constructor() {
        console.log("Constructor Carrito");
        this.productos = [];
        this.numProductos = 0;
        this.precio = 0;
        this.subtotal = 0;
        this.descuentos =0;
        this.total = 0;
    }
}