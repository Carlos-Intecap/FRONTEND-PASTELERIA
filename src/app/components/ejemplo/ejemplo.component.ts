import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss'],
  /* PUEDO INDICARLE SI DEPENDE DE UN SERVICIO O VARIOS SERVICIOS */
  providers: [ProductosService]
})
export class EjemploComponent implements OnInit {
/*
  title = 'Ejemplo';
  personas = [
    { nombre: 'Juan Solares', edad: 24},
    { nombre: 'Cristian', edad: 15},
    { nombre: 'Luis', edad: 42},
    { nombre: 'Iker', edad: 5}
  ]; */
  // productos
  // 1. IMPORTAR EL PRODUCTO MODEL Y ASIGNARLE UN NOMBRE
  public productosModelGet: Producto;
  // 5. Model post para agregarlo
  public productosModelPost: Producto;
  // 2. PONER EL CONSTRUCTOR CON EL SERVICIO
  constructor(
    private _productoService: ProductosService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Ejemplo'); // Establece el título de la pestaña
    // lo el agregar :) para que se cumpla lo que estoy mandando
    this.productosModelPost = new Producto('', '', 0, 0, 0);
  }
  // 4. PARA QUE MUESTRE EL ARRAY
  ngOnInit(): void {
    this.getProductos();
  }
  // 3. MANDAR A LLAMAR AL SERVICIO QUE DECLARE EN EL CONSTRUCTOR
  getProductos(){
    this._productoService.obtenerProductos().subscribe(
      (response)=>{
        this.productosModelGet = response.productos;
        console.log(this.productosModelGet);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  
  // 6. AGREGAR PRODUCTOS
  postProductos(){
    // variable para agregar
    this._productoService.agregarProducto(this.productosModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  
}
