export class Producto {
    id: number;
    nombre: string;
    precio: number;
    precioUnidad: number;
    oferta: number;
    foto: string;
    unidad: string;
    cantidad: number;
    precioConOferta:number;

    constructor(nombre: string, precio: number, precioUnidad?: number, oferta?: number, foto?: string, unidad?: string, id?: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.precioUnidad = precioUnidad ? precioUnidad : 0;
        this.oferta = oferta ? oferta : 0;
        this.foto = foto ? foto : '../assets/img/producto-default.jpg';
        this.unidad = unidad ? unidad : '';
        this.id = id ? id : -1;
        this.cantidad = 1;
        this.precioConOferta = this.precio - (this.precio * this.oferta / 100);
    }
}