import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
  /* PUEDO INDICARLE SI DEPENDE DE UN SERVICIO O VARIOS SERVICIOS */
 
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
  
  // 2. PONER EL CONSTRUCTOR CON EL SERVICIO
  constructor(
    
  ) {
    
  }
  // 4. PARA QUE MUESTRE EL ARRAY
  ngOnInit(): void {
    
  }
  // 3. MANDAR A LLAMAR AL SERVICIO QUE DECLARE EN EL CONSTRUCTOR
 
  
  
  
}
