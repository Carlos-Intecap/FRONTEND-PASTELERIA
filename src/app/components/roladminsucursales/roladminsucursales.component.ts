import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//LLamando al modelo
import { Usuario }  from  'src/app/models/usuarios.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';
import { Sucursal} from 'src/app/models/sucursal.model'

@Component({
  selector: 'app-roladminsucursales',
  templateUrl: './roladminsucursales.component.html',
  styleUrls: ['./roladminsucursales.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminsucursalesComponent implements OnInit {

  public token;

  public idEmpresa;
  //Ver
  public SucursalModelGet: Sucursal;
  //Agregar
  public SucursalModelPost: Sucursal;
  //Ver por Id
  public SucursalModelGetId: Sucursal;
  constructor(
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService

  ) {
     //token
     this.titleService.setTitle('Rol admin gestor');
     this.token=this._usuarioService.obtenerToken();
     this.SucursalModelGetId = new Sucursal(
      "",
      "",
      "",
      0,
      "",
      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        rol: ""
      }],
    );
    this.SucursalModelPost = new Sucursal(
      "",
      "",
      "",
      0,
      "",
      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        rol: ""
      }],
    );

  }
  //Ver Sucursales
  getSucursalesRolAdmin(){
    this._adminUsuariosService.getEmpresasRolAdmin(this.token).subscribe(
      (response)=>{
        this.SucursalModelGet=response.sucursales;
        console.log(this.SucursalModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //Agregar Sucursales
  postSucursalRolAdmin(){
    this._adminUsuariosService.agregarSucursalesRolAdmin(this.SucursalModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursalesRolAdmin();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
   }

   // Eliminar Sucursales
   deleteSucursalesRolAdmin(idSucursal){

    this._adminUsuariosService.eliminarSucursalesRolAdmin(idSucursal,this.token).subscribe(
      (response)=>{
        console.log(response);

        this.getSucursalesRolAdmin();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
   }

  /*
getSucursalId(idEmpresa){

    this._adminUsuariosService.obtenerSucursalEmpresaId(idEmpresa, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.SucursalModelGetId = response.sucursales;

      },

      (error)=>{
        console.log(error)

      }
    )
  } */

    getSucursalIdRolAdmin(idSucursal){
      this._adminUsuariosService.obtenerSucursalRolId(idSucursal, this.token).subscribe(
        (response)=>{
          console.log(response);
          this.SucursalModelGetId = response.sucursales;
        },(error)=>{
          console.log(error)
        }
      )
    }

    // Editar sucursales

    putSucursales(){

      this._adminUsuariosService.editarSucursalRolAdmin(this.SucursalModelGetId, this.token).subscribe(
        (response)=>{
          console.log(response);
          this.getSucursalesRolAdmin();
        }
      )
    }

  ngOnInit(): void {
    this.getSucursalesRolAdmin();
  }
}