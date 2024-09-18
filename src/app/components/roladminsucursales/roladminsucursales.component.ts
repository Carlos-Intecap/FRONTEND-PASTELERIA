import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//LLamando al modelo
import { Empresa }  from  'src/app/models/empresa.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';
import { Sucursal } from 'src/app/models/sucursal.model'
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-roladminsucursales',
  templateUrl: './roladminsucursales.component.html',
  styleUrls: ['./roladminsucursales.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})

export class RoladminsucursalesComponent implements OnInit {
  public token;
  public EmpresaModelGetId: Empresa;
  public SucursalModelGet: Sucursal;
  //Agregar
  public SucursalModelPost: Sucursal;
  // Administrar usuarios
  public UsuarioModelGet: Usuario;
  public UsuarioModelGetId: Usuario;
  // public idEmpresa;
  // public idUsuario;


  constructor(

    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService,


  ) {
    //token
    this.titleService.setTitle('Rol admin sucursales');
    this.token=this._usuarioService.obtenerToken();
    // traerme el id del gestor
    this.UsuarioModelGetId = new Usuario("", "", "", "", "", "", 0, "", "", "", "");

    // cambiando el array que no se usara xd
    this.SucursalModelPost = new Sucursal(
      "",
      "",
      "",
      0,
      "",
      "",
      "",
      [{

        idEmpresa: "",
        nombreEmpresa: "",
        direccion: "",
        telefono: 0
      }],
      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        rol: ""
      }],
    );
  }

  // los id se quedan guardados en el local storage y se abriran en la siguiente pagina
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      const idEmpresa = dataRuta.get('idEmpresa');

      if (idEmpresa) {
        localStorage.setItem('idEmpresa', idEmpresa);
      }


      console.log(idEmpresa);

      this.getUsuariosRolGestor();
    });
  }


  getSucursalesPorEmpresa(idEmpresa){
    this._adminUsuariosService.ObtenerSucursalesIdEmpresa(idEmpresa, this.token).subscribe(
      (response)=>{
        this.SucursalModelGet = response.sucursales;
        console.log(this.SucursalModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  // ver a los roles gestores
  getUsuariosRolGestor() {
    this._adminUsuariosService.getUsuariosRolGestor(this.token).subscribe(
      (response) => {
        this.UsuarioModelGet = response.usuario;
        console.log(this.UsuarioModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }

  // Get usuario por id
  getUsuarioId(idUsuario) {

    this._adminUsuariosService.obtenerRolGestorId(idUsuario, this.token).subscribe(

      (response) => {
        console.log(response);

        this.UsuarioModelGetId = response.usuario;

      },

      (error) => {
        console.log(error)

      }
    )
  }



  /* postSucursalPorEmpresa(){
    this._adminUsuariosService.agregarSucursalesIdEmpresa(this.SucursalModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this._activatedRoute.paramMap.subscribe((dataRuta)=>{
          console.log(dataRuta.get('idEmpresa'));
          this.getSucursalesPorEmpresa(dataRuta.get('idEmpresa'))
        })
      },
      (error)=>{
        console.log(<any>error);
      }
    )
   }*/


   // Eliminar Sucursales
   /*deleteSucursalesRolAdmin(idSucursal){

    this._adminUsuariosService.eliminarSucursalesRolAdmin(idSucursal,this.token).subscribe(
      (response)=>{
        console.log(response);

        this.getSucursalesRolAdmin();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
   }*/



    /*getSucursalIdRolAdmin(idSucursal){
      this._adminUsuariosService.obtenerSucursalRolId(idSucursal, this.token).subscribe(
        (response)=>{
          console.log(response);
          this.SucursalModelGetId = response.sucursales;
        },(error)=>{
          console.log(error)
        }
      )
    }*/

    // Editar sucursales

   /* putSucursales(){

      this._adminUsuariosService.editarSucursalRolAdmin(this.SucursalModelGetId, this.token).subscribe(
        (response)=>{
          console.log(response);
          this.getSucursalesRolAdmin();
        }
      )
    }*/


}
