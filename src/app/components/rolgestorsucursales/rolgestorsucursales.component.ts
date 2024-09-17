import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Sucursal } from 'src/app/models/sucursal.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rolgestorsucursales',
  templateUrl: './rolgestorsucursales.component.html',
  styleUrls: ['./rolgestorsucursales.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})
export class RolgestorsucursalesComponent implements OnInit {

  public token;
  public SucursalModelGet: Sucursal;

  constructor(
    private titleService: Title,
    private _gestorUsuariosService: GestorUsuarioService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Rol gestor sucursales');
    this.token = this._usuarioService.obtenerToken();

   }

  ngOnInit(): void {

    this.getSucursales();
  }


   //VER SUCURSALES
   getSucursales(){
    this._gestorUsuariosService.obtenerSucursalesGestor(this.token).subscribe(
      (response)=>{
        this.SucursalModelGet = response.sucursales;
        console.log(this.SucursalModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

}
