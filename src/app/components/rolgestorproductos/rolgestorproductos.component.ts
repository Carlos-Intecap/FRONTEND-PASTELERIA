import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Producto } from 'src/app/models/productos.model';
import Swal from 'sweetalert2';

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
  public ProductoModelGetId: Producto;

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
    this.ProductoModelGetId = new Producto(
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
      this.idCategoria = dataRuta.get('idCategoria'); // Asignar el idCategoria
      this.idSucursal = localStorage.getItem('idSucursal'); // Obtener el idSucursal

      if (this.idCategoria && this.idSucursal) {
        this.getProductosPorRolGestor(this.idSucursal, this.idCategoria, this.token); // Llamar al nuevo método
      }

      console.log(this.idCategoria); // Verificar el idCategoria
      console.log(this.idSucursal);  // Verificar el idSucursal
    });
  }


  /* getProductosPorCategoria(idCategoria) {
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
  } */

      getProductosPorRolGestor(idSucursal: string, idCategoria: string, token: string) {
        this._gestorUsuarioService
          .obtenerProductosPorRolGestor(idSucursal, idCategoria, token)
          .subscribe(
            (response) => {
              this.ProductoModelGet = response.productos; // Asignar los productos a la variable
              console.log(this.ProductoModelGet); // Verifica la respuesta
            },
            (error) => {
              console.log(<any>error); // Manejo de errores
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
          Swal.fire({
            icon: 'success',
            title: 'Exito!',
            text: 'Producto agregado exitosamente',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              window.location.reload();
            }
          });
        },
        error: (error) => {
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: "Datos incompletos o nombre existente",
            footer: '*Ingrese los datos de nuevo*',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  // eliminar producto
  deleteProducto(idProducto){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se llama al servicio para eliminar
        this._gestorUsuarioService.eliminarProductos(idProducto,this.token).subscribe(
          (response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'El producto ha sido eliminado exitosamente.',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                window.location.reload();
              }
            });
          },(error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar el producto.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }

  // ver producto por id
  getProductoId(idProducto){
    this._gestorUsuarioService.obtenerProductoId(idProducto,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.ProductoModelGetId = response.productos;
      },(error)=>{
        console.log(error)
      }
    )
  }

  // editar producto
  putProducto(){
    this._gestorUsuarioService.editarProducto(this.ProductoModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Producto editado correctamente',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            window.location.reload();
          }
        });
      },(error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Nombre existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }
}
