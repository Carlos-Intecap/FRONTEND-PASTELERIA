import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//LLamando al modelo
import { Usuario }  from  'src/app/models/usuarios.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';
/* rol admin gestores */

import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladmingestores',
  templateUrl: './roladmingestores.component.html',
  styleUrls: ['./roladmingestores.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladmingestoresComponent implements OnInit {
  public token;
  //Ver
  public UsuarioModelGet:Usuario;
  //Agregar
  public UsuarioModelPost: Usuario;
  //Ver por Id
  public UsuarioModelGetId: Usuario;
  constructor(
    //Nombre a servicios
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService
  )
  {
    //token
    this.titleService.setTitle('Rol admin gestor');
    this.token=this._usuarioService.obtenerToken();
    //AGREGAR
    this.UsuarioModelPost = new Usuario("", "", "", "", "", "", 0, "", "", "", "");
 //VER POR ID
    this.UsuarioModelGetId=new Usuario("", "", "", "", "", "", 0, "", "", "", "");
   }
   //Crar funciones para CRUDs
   //Ver Usuarios
   getUsuariosRolGestor(){
    this._adminUsuariosService.getUsuariosRolGestor(this.token).subscribe(
      (response)=>{
        this.UsuarioModelGet=response.usuario;
        console.log(this.UsuarioModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
   }

   //Agregar Usuarios
   postUsuariosRolGestor() {
    this._adminUsuariosService.agregarUsuarioRolGestor(this.UsuarioModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response) => {
        console.log(response);
        this.getUsuariosRolGestor();

        // Aquí debe ir Swal.fire dentro del bloque de respuesta
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Usuario agregado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
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


   //Eliminar Usuarios
   deleteUsuariosRolGestor(idUsuario) {
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
        this._adminUsuariosService.eliminarUsuarioRolGestor(idUsuario, this.token).subscribe(
          (response) => {
            console.log(response);
            this.getUsuariosRolGestor(); // Actualiza la lista después de eliminar
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'El usuario ha sido eliminado exitosamente.',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
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
   //Buscar Rol Gestor por Id
   getUsuarioId(idUsuario){

    this._adminUsuariosService.obtenerRolGestorId(idUsuario, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.UsuarioModelGetId = response.usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  putUsuarios(){

    this._adminUsuariosService.editarRolGestor(this.UsuarioModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getUsuariosRolGestor();

        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Usuario editado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Email existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }


    )
  }



  ngOnInit(): void {
    this.getUsuariosRolGestor();
  }

}
