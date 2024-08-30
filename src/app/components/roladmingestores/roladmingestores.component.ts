import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//LLamando al modelo
import { Usuario }  from  'src/app/models/usuarios.model';
//Llamando al servicio 
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-roladmingestores',
  templateUrl: './roladmingestores.component.html',
  styleUrls: ['./roladmingestores.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladmingestoresComponent implements OnInit {
  public token;
  public UsuarioModelGet:Usuario;


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
   }
   //Crar funciones para CRUDs
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

  ngOnInit(): void {
    this.getUsuariosRolGestor();
  }

}
