import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rolgestorcategorias',
  templateUrl: './rolgestorcategorias.component.html',
  styleUrls: ['./rolgestorcategorias.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})

export class RolgestorcategoriasComponent implements OnInit {

  public token;
  public CategoriasModelGet: Categoria;
  /* public CategoriasModelPost: Categoria;
  public CategoriasModelGetId: Categoria; */

  constructor(
    public _activatedRoute: ActivatedRoute,

    private titleService: Title,
    private _gestorCategoriasServices: GestorUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol gestor categorias');
    this.token = this._usuarioService.obtenerToken();
    /* this.CategoriasModelPost = new Categoria("","","","");
    this.CategoriasModelGetId = new Categoria("","","",""); */
  }

  //VER CATEGORIAS
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

  //AGREGAR CATEGORIAS
  /* postCategorias(){
    this._gestorCategoriasServices.agregarCategoria(this.CategoriasModelPost,this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  } */

  //ELIMINAR CATEGORIAS
  /* deleteCategorias(idCategoria){
    this._gestorCategoriasServices.eliminarCategoria(idCategoria,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      },(error)=>{
        console.log(<any>error);
      }
    )
  } */

  //OBTENER CATEGORIA POR ID
  /* getCategoriaId(idCategoria){
    this._gestorCategoriasServices.obtenerCategoriaId(idCategoria,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.CategoriasModelGetId = response.categorias;
      },(error)=>{
        console.log(error);
      }
    )
  } */

  //EDITAR CATEGORIA
  /* putCategorias(){
    this._gestorCategoriasServices.editarCategoria(this.CategoriasModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getCategorias();
      }
    )
  }*/

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      const idSucursal = dataRuta.get('idSucursal');

      if (idSucursal) {
        localStorage.setItem('idSucursal', idSucursal);
      }
      

      console.log(idSucursal);
      
      this.getCategorias();
    });


  }
}