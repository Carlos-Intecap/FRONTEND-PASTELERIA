import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]

})
export class LoginComponent implements OnInit {

  //Llamar al modelo
  public usuarioModel: Usuario;
  //Llamar al servicio en el constructor
  constructor(
    private _usuariosService: UsuarioService,
    private _router: Router

  ) {
    //Llamar a los datos del modelo
    this.usuarioModel = new Usuario(
      "", "", "", "", "", "", 0, "", "", "",

    );

  }

  ngOnInit(): void {
  }

  // Funciones imprime el link de acceso de cada usuario
  getToken() {
    this._usuariosService.login(this.usuarioModel, "true").subscribe(
      (response) => {

        console.log(response);
        localStorage.setItem("token", response.token);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._usuariosService.login(this.usuarioModel, "true").subscribe(
        (response) => {
          // console.log(response);
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error) => {
          console.log(<any>error);

        }
      )
    })
  }

  login() {
    this._usuariosService.login(this.usuarioModel, "false").subscribe(
      (response) => {

        // TIRA LA RESPUESTA
        this.getTokenPromesa().then(respuesta => {

          /*if (this._usuariosService.obtenerIdentidad().rol === 'ROL_GESTOR') {
            this._router.navigate(['/vistarolgestor']);

          } else if (this._usuariosService.obtenerIdentidad().rol === 'ROL_ADMIN') {
            this._router.navigate(['/vistaroladmin']);

          } else if (this._usuariosService.obtenerIdentidad().rol === 'ROL_FACTURADOR') {
            this._router.navigate(['/vistarolfacturador']);
          }*/

            this._router.navigate(['/vistarolgestor']);
          localStorage.setItem("identidad", JSON.stringify(response.usuario))

        })

      },

      (error) => {
        console.log(<any>error);
      }
    )
  }

}
