import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Sucursal } from 'src/app/models/sucursal.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';

@Component({
  selector: 'app-rolclientesucursales',
  templateUrl: './rolclientesucursales.component.html',
  styleUrls: ['./rolclientesucursales.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class RolclientesucursalesComponent implements OnInit {

  public token;
  public SucursalesModelGet: Sucursal;

  constructor(
    private titleService: Title,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) { 
    this.titleService.setTitle('Rol cliente sucursales');
    this.token = this._usuarioService.obtenerToken();

  }


  ngOnInit(): void {
    this.getSucursales();
  }

  // ver todas las sucursales
  getSucursales() {
    this._clienteUsuarioService.obtenerSucursales(this.token).subscribe(
      (response) => {
        this.SucursalesModelGet = response.sucursales;
        console.log(this.SucursalesModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  } 



}
