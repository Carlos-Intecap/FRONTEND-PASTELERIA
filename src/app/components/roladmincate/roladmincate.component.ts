import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-roladmincate',
  templateUrl: './roladmincate.component.html',
  styleUrls: ['./roladmincate.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladmincateComponent implements OnInit {

  public token;
  public CategoriasModelGet: Categoria;
  public CategoriasModelPost: Categoria;
  public CategoriasModelGetId: Categoria;

  constructor(
    private titleService: Title,
    private _adminUsuariosService: AdminUsuariosService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol admin categorias');
    this.token = this._usuarioService.obtenerToken();
    this.CategoriasModelPost = new Categoria("","","","");
    this.CategoriasModelGetId = new Categoria("","","","");
  }

  //VER CATEGORIAS
  getCategorias(){
    this._adminUsuariosService.obtenerCategoriasRolAdmin(this.token).subscribe(
      (response)=>{
        this.CategoriasModelGet = response.categorias;
        console.log(this.CategoriasModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //AGREGAR CATEGORIAS
  postCategorias(){
    this._adminUsuariosService.agregarCategoriaRolAdmin(this.CategoriasModelPost,this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //ELIMINAR CAEGORIAS
  deleteCategorias(idCategoria){
    this._adminUsuariosService.eliminarCategoriaRolAdmin(idCategoria,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //OBTENER CATEGORIA POR ID
  getCategoriaId(idCategoria){
    this._adminUsuariosService.obtenerCategoriaIdRolAdmin(idCategoria,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.CategoriasModelGetId = response.categorias;
      },(error)=>{
        console.log(error);
      }
    )
  }

  //EDITAR CATEGORIA
  putCategorias(){
    this._adminUsuariosService.editarCategoriaRolAdmin(this.CategoriasModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      }
    )
  }

  ngOnInit(): void {
    this.getCategorias();
  }

}