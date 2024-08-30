import { Component, OnInit } from '@angular/core';

// 1. importar lo que usare
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from  'src/app/models/categoria.model';
import { Title } from '@angular/platform-browser';

// importar al usuario para el token
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-vistarolgestor',
  templateUrl: './vistarolgestor.component.html',
  styleUrls: ['./vistarolgestor.component.scss'],
  // 2. llamar a los servicios
  providers: [CategoriasService, UsuarioService]
})
export class VistarolgestorComponent implements OnInit {

  // variable para token general
  public token;

  // 3. llamar a get y post dependiendo si es agregar, editar o eliminar
  public categoriasModelGet: Categoria;

  // 4. LLAMAR A LOS SERVICIOS
   constructor(
    private titleService: Title,
    // servicio de categoria
    private _categoriasServices: CategoriasService,
    // servicio de usuario
    private _usuarioService: UsuarioService

  ) 
  {
    this.titleService.setTitle('Rol gestor');  

    this.token = this._usuarioService.obtenerToken();

  }

  
  // 5. construir las funciones get, post, put y delete
  getCategorias(){
    this._categoriasServices.obtenerCategorias(this.token).subscribe(
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
