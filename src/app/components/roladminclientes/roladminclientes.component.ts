import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Llamando al modelo
import { Usuario } from 'src/app/models/usuarios.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-roladminclientes',
  templateUrl: './roladminclientes.component.html',
  styleUrls: ['./roladminclientes.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminclientesComponent implements OnInit {
  public token;
  //Ver
  public UsuarioModelGet:Usuario;
  //Agregar
  public UsuarioModelPost:Usuario;
  //Ver por ID
  public UsuarioModelGetId:Usuario;
  constructor(
    
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService
  )
  {
    //token
    this.titleService.setTitle('Rol admin cliente');
    this.token=this._usuarioService.obtenerToken();
    //AGREGAR 
    this.UsuarioModelPost = new Usuario("", "", "", "", "", "", 0, "", "", "");
 //VER POR ID
    this.UsuarioModelGetId=new Usuario("", "", "", "", "", "", 0, "", "", "");
  }
  //Crear funcines para CRUDs
  //Ver Usuarios
  getUsuariosRolCliente(){
    this._adminUsuariosService.getUsuariosRolCliente(this.token).subscribe(
      (response)=>{
        this.UsuarioModelGet=response.usuario;
        console.log(this.UsuarioModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }
  
  //Agregar Usuarios
  postUsuariosRolCliente(){
    this._adminUsuariosService.agregarUsuarioRolCliente(this.UsuarioModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuariosRolCliente();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }


  //Eliminar Usuarios
  deleteUsuariosRolCliente(idUsuario){

    this._adminUsuariosService.eliminarUsuarioRolCliente(idUsuario,this.token).subscribe(
      (response)=>{
        console.log(response);

        this.getUsuariosRolCliente();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  //Buscar rol Cliente por Id
  getUsuarioId(idUsuario){

    this._adminUsuariosService.obtenerRolClienteId(idUsuario, this.token).subscribe(
  
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

    this._adminUsuariosService.editarRolCliente(this.UsuarioModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getUsuariosRolCliente();

      },


    )
  }



  ngOnInit(): void {
    this.getUsuariosRolCliente();
  }

}
