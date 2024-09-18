 import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//LLamando al modelo
import { Usuario }  from  'src/app/models/usuarios.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-roladminfacturadores',
  templateUrl: './roladminfacturadores.component.html',
  styleUrls: ['./roladminfacturadores.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminfacturadoresComponent implements OnInit {
  public token;
  public UsuarioModelGet:Usuario;
  public UsuarioModelPost:Usuario;
  public UsuarioModelGetId: Usuario;


  constructor(
    //Nombre a servicios
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService
  )
  {
    //token
    this.titleService.setTitle('Rol admin facturador');
    this.token=this._usuarioService.obtenerToken();
    this.UsuarioModelPost= new Usuario("","","","","","",0,"","","","");
    this.UsuarioModelGetId = new Usuario("","","","","","",0,"","","","");

  }
  //Crear funciones para CRUDs
  getUsuariosRolFacturador(){
    this._adminUsuariosService.getUsuariosRolFacturador(this.token).subscribe(
      (response)=>{
        this.UsuarioModelGet=response.usuario;
        console.log(this.UsuarioModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteUsuarioRolFacturador(idUsuario) {
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
        this._adminUsuariosService.eliminarUsuarioRolFacturador(idUsuario, this.token).subscribe(
          (response) => {
            console.log(response);
            this.getUsuariosRolFacturador(); // Actualiza la lista después de eliminar
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



postUsuariosRolFacturador(){
  this._adminUsuariosService.agregarUsuarioRolFacturador(this.UsuarioModelPost, this._usuarioService.obtenerToken()).subscribe(
    (response)=>{
      console.log(response);
      this.getUsuariosRolFacturador();
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
  )
}

getUsuarioId(idUsuario){
  this._adminUsuariosService.obtenerRolFacturadorId(idUsuario, this.token).subscribe(
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

  this._adminUsuariosService.editarRolFacturador(this.UsuarioModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getUsuariosRolFacturador();
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
    this.getUsuariosRolFacturador();
  }

}
