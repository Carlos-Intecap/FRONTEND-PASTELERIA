import { Component, OnInit } from '@angular/core';

// 1. importar lo que usare
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from  'src/app/models/categoria.model';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-vistarolgestor',
  templateUrl: './vistarolgestor.component.html',
  styleUrls: ['./vistarolgestor.component.scss'],
  // 2. llamar al servicio
  providers: [CategoriasService]
})
export class VistarolgestorComponent implements OnInit {

  // 3. llamar a get y post dependiendo si es agregar, editar o eliminar
  public categoriasModelGet: Categoria;

  // 4. llamar a los servicios en el constructor
   constructor(
    
    private _categoriasServices: CategoriasService,

    private titleService: Title
  ) 
  {
    this.titleService.setTitle('Rol gestor');  

  }

  
  // 5. construir las funciones get, post, put y delete
  getCategorias(){
    this._categoriasServices.obtenerCategorias().subscribe(
      (response)=>{
        //Mandar a llamar a la respuesta 200
        this.categoriasModelGet=response.categorias;
        console.log(this.categoriasModelGet);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  ngOnInit(): void {
    this.getCategorias(); 
  }


}
