import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
//2.modelo 
import { Categoria } from  'src/app/models/categoria.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  //1. Consumir el servicio
  providers: [CategoriasService]
})
export class CategoriaComponent implements OnInit {


//Llamando al modelo
  public categoriasModelGet: Categoria;

  
  constructor(
    // Llamando al servicio en el constructor
    private _categoriasServices: CategoriasService,

    private titleService: Title
  ) 
  {
    this.titleService.setTitle('Categoria');  

  }

  ngOnInit(): void {

    this.getCategorias();
  }


  // Llamando a los CRUDs al backend
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
}
