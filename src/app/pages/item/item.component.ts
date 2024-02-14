import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  producto: productoDescripcion | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService){
    this.route.params
    .subscribe(
      parametros =>{
        this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: productoDescripcion) => {
          this.id= parametros['id']
          this.producto = producto;
        })
      }
    )
  }

}

