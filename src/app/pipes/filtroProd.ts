import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../model/producto';

@Pipe({
  name: 'filtroProd'
})
export class FilterProductosPipe implements PipeTransform {
/**
 * Filtro para buscar en una colección de Productos. No es CaseSensitive (Le da igual mayus o minus)
 * @param items Array de Productos
 * @param searchText String con el nombre del producto
 */
  transform(items: Producto[], searchText: string): Producto[] {

    if(!items) return []; // Si no elementos en el array

    if(!searchText) return items; // Si no hay criterio de búsqueda

    searchText = searchText.toLowerCase(); //Pasa a minuscula la búsqueda
    let busqueda = "";
    return items.filter( prodIteracion => {
        busqueda = prodIteracion.nombre;
        busqueda = busqueda.toLowerCase();
        return busqueda.includes(searchText);
    });
   }

}