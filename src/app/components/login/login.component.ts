import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import Swal from 'sweetalert2';


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
    private _router: Router,
    private titleService: Title,

  ) {
    //Llamar a los datos del modelo
    this.usuarioModel = new Usuario(
      "", "", "", "", "", "", 0, "", "", "", "",

    );
    this.titleService.setTitle('Login');

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
        this.getTokenPromesa().then(respuesta => {
          console.log(response);
          this._router.navigate(['/vistarolgestor']);
          localStorage.setItem("identidad", JSON.stringify(response.usuario));
        });

        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Logueado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Contraseña o correo incorrectos",
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }




}
