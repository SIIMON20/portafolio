import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { productoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[] = [];
  productosFiltrado : Producto[] = [];
  cargando = true;

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  cargarProductos(){
    this.http.get<Producto[]>('https://angular-html-8d9a7-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProducto(id: string):Observable<productoDescripcion>{

    return this.http.get<productoDescripcion>(`https://angular-html-8d9a7-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProdcuto( termino : string){

    this.productosFiltrado = this.productos.filter( producto => {
      return true;
      console.log(this.productosFiltrado)
    } )

  }
}
