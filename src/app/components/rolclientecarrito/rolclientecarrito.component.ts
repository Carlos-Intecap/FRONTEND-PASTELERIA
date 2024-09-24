import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/models/carrito.model';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';

@Component({
  selector: 'app-rolclientecarrito',
  templateUrl: './rolclientecarrito.component.html',
  styleUrls: ['./rolclientecarrito.component.scss']
})
export class RolclientecarritoComponent implements OnInit {
  public token;

  public CarritosModelGet: Carrito;
  public CarritoModelPost: Carrito;
  public idProducto;

  constructor(
    private titleService: Title,
    public _activatedRoute: ActivatedRoute,

    private _usuarioService: UsuarioService,
    private _clienteUsuarioService: ClienteUsuarioService,

  ) {
    this.titleService.setTitle('Carrito');
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
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idProducto'));

      // this.(dataRuta.get('idProducto'))
      this.getCarritosRolCliente();

    })
  }

  getCarritosRolCliente() {
    this._clienteUsuarioService.obtenerCarritos(this.token).subscribe(
      (response) => {
        this.CarritosModelGet = response.carritos;
        console.log(this.CarritosModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }

  /* agregar producto al carrito */
  putCarrito(idProducto) {
    this._clienteUsuarioService.AgregarNuevoProducto(
        this.CarritoModelPost,  // Asegúrate de que tiene la estructura correcta
        this.token,             // Verifica que el token no sea nulo o indefinido
        idProducto              // Asegúrate de que idProducto es el ID correcto
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
