import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

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
    this.CategoriasModelPost = new Categoria("","","","","");
    this.CategoriasModelGetId = new Categoria("","","","", "");
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
      (response) => {
        console.log(response);
        this.getCategorias();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Categoria agregada exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },(error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Datos incompletos o nombre existente",
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }

  //ELIMINAR CAEGORIAS
  deleteCategorias(idCategoria){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se llama al servicio para eliminar
        this._adminUsuariosService.eliminarCategoriaRolAdmin(idCategoria,this.token).subscribe(
          (response) => {
            console.log(response);
            this.getCategorias();
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'La categoria ha sido eliminada exitosamente.',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar la categoria.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
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
      (response) => {
        console.log(response);
        this.getCategorias();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Categoria editada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },(error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Nombre existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }

  ngOnInit(): void {
    this.getCategorias();
  }

}
