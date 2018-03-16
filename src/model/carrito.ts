import { Producto } from "./producto";

export class Carrito {
    productos: Producto[]
    numProductos: number;
    precio: number;

    constructor() {
        console.log("Constructor Carrito");
        this.productos = [];
        this.numProductos = 0;
        this.precio = 0;
    }
}