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
  public UsuarioModelGet:Usuario;


  constructor(
    
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService
  )
  {
    //token
    this.titleService.setTitle('Rol admin cliente');
    this.token=this._usuarioService.obtenerToken();
  }
  //Crear funcines para CRUDs
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

  ngOnInit(): void {
    this.getUsuariosRolCliente();
  }

}
