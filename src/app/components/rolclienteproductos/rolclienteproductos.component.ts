import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Carrito } from 'src/app/models/carrito.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolclienteproductos',
  templateUrl: './rolclienteproductos.component.html',
  styleUrls: ['./rolclienteproductos.component.scss']
})
export class RolclienteproductosComponent implements OnInit {

  public token;
  public ProductosModelGet: Producto;
  public ProductosModelGetId: Producto;
  public CarritoModelPost: Carrito;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    // llamando a los servicios
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol cliente productos');
    this.token = this._usuarioService.obtenerToken();

    this.CarritoModelPost = new Carrito(
      "",
      "",
      [{
        idProducto: "",
        nombreProducto: "",
        marca: "",
        cantidad: 0,
        precio: 0,
        subTotal: 0,
        descripcionCategoria: [{
          idCategoria: "",
          nombreCategoria: ""
        }],
        datosSucursal:[{
          idSucursal:"",
          nombreSucursal: "",
          direccionSucursal: "",
          telefonoSucursal: ""
      }]
      }],
       0
    );

    this.ProductosModelGetId = new Producto("", "", "", "", 0, 0, 0, "", "", "",
      [{
        idCategoria: "",
        nombreCategoria: "",
      }],

      [{
        idSucursal: "",
        nombreSucursal: "",
        direccionSucursal: "",
        telefonoSucursal: 0,
      }]

    );


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


  getProductoid(idProducto) {
    this._clienteUsuarioService.obtenerProductoid(idProducto, this.token).subscribe(
        (response) => {
            console.log(response);
            this.ProductosModelGetId = response.productos;

        },
        (error) => {
            console.log(error);
        }
    );
}


  putCarrito(idProducto: String, cantidad: Number) {
    this._clienteUsuarioService.putProductoCarrito(
        idProducto,   // Envía el idProducto
        cantidad,     // Envía la cantidad
        this.token    // Verifica que el token no sea nulo o indefinido
    ).subscribe(
        (response) => {
            console.log('Producto agregado al carrito:', response);
            window.location.reload(); // Recargar la página si es necesario
        },
        (error) => {
            console.error('Error al agregar el producto:', error);
        }
    );
}


}
