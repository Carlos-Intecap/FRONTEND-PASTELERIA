import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Empresa } from 'src/app/models/empresa.model';
import { Usuario } from 'src/app/models/usuarios.model';
import { Sucursal } from 'src/app/models/sucursal.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roladminfinalsucursales',
  templateUrl: './roladminfinalsucursales.component.html',
  styleUrls: ['./roladminfinalsucursales.component.scss'],
  providers: [AdminUsuariosService, UsuarioService],
})
export class RoladminfinalsucursalesComponent implements OnInit {
  // token
  public token;
  public SucursalModelGet: Sucursal;
  public SucursalModelPost: Sucursal;
  public idEmpresa;
  public idUsuario;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _adminUsuariosService: AdminUsuariosService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol admin sucursales');
    this.token = this._usuarioService.obtenerToken();
    // cambiando el array que no se usara xd
    this.SucursalModelPost = new Sucursal(
      '',
      '',
      '',
      0,
      [
        {
          idEmpresa: '',
          nombreEmpresa: '',
          direccion: '',
          telefono: 0,
        },
      ],
      [
        {
          idUsuario: '',
          nombre: '',
          apellido: '',
          email: '',
          rol: '',
        },
      ]
    );
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idUsuario = dataRuta.get('idUsuario'); // Asignar el idUsuario a la propiedad de la clase
      this.idEmpresa = localStorage.getItem('idEmpresa'); // Asignar correctamente
  
      if (this.idUsuario) {
        this.getSucursalesPorGestor(this.idUsuario); // Usar la propiedad
      }
      
      console.log(this.idUsuario); // Deberías ver el idUsuario correcto aquí
      console.log(this.idEmpresa);  // Deberías ver el idEmpresa correcto aquí
    });
  }

  // ver sucursales por gestor
  getSucursalesPorGestor(idUsuario) {
    this._adminUsuariosService
      .ObtenerSucursalesIdGestor(idUsuario, this.token)
      .subscribe(
        (response) => {
          this.SucursalModelGet = response.sucursales;
          console.log(this.SucursalModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }

  //  agregar sucursales
  // post sucursal
  postSucursal(idEmpresa, idUsuario) {
    this._adminUsuariosService
      .AgregarNuevaSucursal(
        this.SucursalModelPost,
        this.token,
        idEmpresa,
        idUsuario
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
