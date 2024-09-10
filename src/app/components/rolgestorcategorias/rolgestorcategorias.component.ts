import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rolgestorcategorias',
  templateUrl: './rolgestorcategorias.component.html',
  styleUrls: ['./rolgestorcategorias.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})

export class RolgestorcategoriasComponent implements OnInit {

  public token;
  public CategoriasModelGet: Categoria;
  public CategoriasModelPost: Categoria;

  constructor(
    private titleService: Title,
    private _gestorCategoriasServices: GestorUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol gestor categorias');
    this.token = this._usuarioService.obtenerToken();
    this.CategoriasModelPost = new Categoria("","","","");
  }

  //Ver categorías
  getCategorias() {
    this._gestorCategoriasServices.obtenerCategorias(this.token).subscribe(
      (response) => {
        this.CategoriasModelGet = response.categorias;
        console.log(this.CategoriasModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }

  //Agregar categorías
  postCategorias(){
    this._gestorCategoriasServices.agregarCategoria(this.CategoriasModelPost,this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //Eliminar categorías
  deleteCategorias(idCategoria){
    this._gestorCategoriasServices.eliminarCategoria(idCategoria,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  ngOnInit(): void {
    this.getCategorias();
  }
}