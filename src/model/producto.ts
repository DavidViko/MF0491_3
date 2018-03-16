export class Producto {
    id: number;
    nombre: string;
    precio: number;
    precioUnidad: number;
    oferta: number;
    foto: string;
    unidad: string;

    constructor(nombre: string, precio: number, precioUnidad?: number, oferta?: number, foto?: string, unidad?: string, id?: number) {
        this.nombre = nombre;

        this.precio = (oferta!=0) ? (precio - (precio * oferta / 100)) : precio;

        this.precioUnidad = precioUnidad ? precioUnidad : 0;
        this.oferta = oferta ? oferta : 0;
        this.foto = foto ? foto : '../assets/img/producto-default.jpg';
        this.unidad = unidad ? unidad : '';
        this.id = id ? id : -1;
    }
}