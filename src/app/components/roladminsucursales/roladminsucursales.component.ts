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



  ngOnInit(): void {
  }

}
