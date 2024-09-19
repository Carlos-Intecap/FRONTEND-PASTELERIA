import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';

@Component({
  selector: 'app-rolclienteproductos',
  templateUrl: './rolclienteproductos.component.html',
  styleUrls: ['./rolclienteproductos.component.scss']
})
export class RolclienteproductosComponent implements OnInit {

  public token;
  public ProductosModelGet: Producto;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    // llamando a los servicios
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) { 
    this.titleService.setTitle('Rol cliente productos');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idSucursal'));

      this.getProductosPorSucursal(dataRuta.get('idSucursal'))
      // this.getProductosSucursales();

    })
  }


  getProductosPorSucursal(idSucursal) {
    this.
      _clienteUsuarioService.obtenerProductosPorIdSucursal(idSucursal, this.token)
      .subscribe(
        (response) => {
          this.ProductosModelGet = response.productos;
          console.log(this.ProductosModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }


}
