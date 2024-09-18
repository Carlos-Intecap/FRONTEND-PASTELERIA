import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Producto } from 'src/app/models/productos.model';

@Component({
  selector: 'app-rolgestorproductos',
  templateUrl: './rolgestorproductos.component.html',
  styleUrls: ['./rolgestorproductos.component.scss'],
  providers: [GestorUsuarioService, UsuarioService],
})
export class RolgestorproductosComponent implements OnInit {
  public token;
  public ProductoModelGet: Producto;
  public ProductoModelPost: Producto;

  public idSucursal;
  public idCategoria;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _gestorUsuarioService: GestorUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol admin productos');
    this.token = this._usuarioService.obtenerToken();

    this.ProductoModelPost = new Producto(
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      '',
      '',
      [{
        idCategoria: '',
        nombreCategoria: '',
      }],
      [{
        idSucursal: '',
        nombreSucursal: '',
        direccionSucursal: '',
        telefonoSucursal: 0,
      }]


    );
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idCategoria = dataRuta.get('idCategoria'); // Asignar el idCategoria a la propiedad de la clase
      this.idSucursal = localStorage.getItem('idSucursal'); // Asignar correctamente

      if (this.idCategoria) {
        this.getProductosPorCategoria(this.idCategoria); // Usar la propiedad
      }

      console.log(this.idCategoria); // Deberías ver el idUsuario correcto aquí
      console.log(this.idSucursal);  // Deberías ver el idSucursal correcto aquí

    });
  }


  getProductosPorCategoria(idCategoria) {
    this._gestorUsuarioService
      .obtenerProductosIdCategoria(idCategoria, this.token)
      .subscribe(
        (response) => {
          this.ProductoModelGet = response.productos;
          console.log(this.ProductoModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }


  // post sucursal
  postProducto(idSucursal, idCategoria) {
    this._gestorUsuarioService
      .AgregarNuevoProducto(
        this.ProductoModelPost,
        this.token,
        idSucursal,
        idCategoria
      )
      .subscribe({
        next: (response: any) => {
          // Recarga la página
          window.location.reload();
        },
        error: (error) => {
          console.log(<any>error);
        }
      });
  }


}
