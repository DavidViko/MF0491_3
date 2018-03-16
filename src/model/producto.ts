export class Producto {
    id: number;
    nombre: string;
    precio: number;
    precioUnidad: number;
    oferta: number;
    foto: string;
    unidad: string;
    cantidad:number;

    constructor(nombre: string, precio: number, precioUnidad?: number, oferta?: number, foto?: string, unidad?: string,cantidad?:number, id?: number) {
        this.nombre = nombre;

        // let descontado: number;
        // descontado = precio - (precio * oferta / 100);

        this.precio = precio;

        this.precioUnidad = precioUnidad ? precioUnidad : 0;
        this.oferta = oferta ? oferta : 0;
        this.foto = foto ? foto : '../assets/img/producto-default.jpg';
        this.unidad = unidad ? unidad : '';
        this.id = id ? id : -1;
    }
}