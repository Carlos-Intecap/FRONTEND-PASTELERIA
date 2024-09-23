import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuarios.model';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladminrepartidores',
  templateUrl: './roladminrepartidores.component.html',
  styleUrls: ['./roladminrepartidores.component.scss'],
  providers: [AdminUsuariosService,UsuarioService]
})
export class RoladminrepartidoresComponent implements OnInit {

  public token;
  public UsuarioModelGet: Usuario;
  public UsuarioModelPost: Usuario;
  public UsuarioModelGetId: Usuario;

  constructor(
    private titleSevice: Title,
    private _adminUsuariosService: AdminUsuariosService,
    private _usuarioService: UsuarioService
  ){
    this.titleSevice.setTitle('Rol admin repartidor');
    this.token = this._usuarioService.obtenerToken();
    this.UsuarioModelPost = new Usuario("", "", "", "", "", "", 0, "", "", "", "");
    this.UsuarioModelGetId = new Usuario("", "", "", "", "", "", 0, "", "", "", "");
  }

  //VER REPARTIDORES
  getUsuariosRolRepartidor(){
    this._adminUsuariosService.obtenerUsuariosRolRepartidor(this.token).subscribe(
      (response)=>{
        this.UsuarioModelGet = response.usuario;
        console.log(this.UsuarioModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //AGREGAR REPARTIDOR
  postUsuariosRolRepartidor(){
    this._adminUsuariosService.agregarUsuarioRolRepartidor(this.UsuarioModelPost,this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuariosRolRepartidor();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Usuario agregado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },(error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Datos incompleto o email existente",
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }


  //ELIMINAR REPARTIDOR
  deleteUsuariosRolRepartidor(idUsuario){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this._adminUsuariosService.eliminarUsuarioRolRepartidor(idUsuario,this.token).subscribe(
          (response)=>{
            console.log(response);
            this.getUsuariosRolRepartidor();
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'El usuario ha sido eliminado exitosamente.',
              showConfirmButton: false,
              timer: 1500
            });
          },(error)=>{
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar el usuario.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }

  //VER REPARTIDOR POR ID
  getUsuarioRolRepartidorId(idUsuario){
    this._adminUsuariosService.obteneUsuarioRolRepartidorId(idUsuario,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.UsuarioModelGetId = response.usuario;
      },(error)=>{
        console.log(error);
      }
    )
  }

  //EDITAR REPARTIDOR
  putUsuariosRolRepartidor(){
    this._adminUsuariosService.editarRolRepartidor(this.UsuarioModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuariosRolRepartidor();
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'Usuario editado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },(error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Email existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }

  ngOnInit(): void {
    this.getUsuariosRolRepartidor();
  }

}
