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
    this.usuarioModel= new Usuario(
      "", "", "", "", "", "", 0 , "", "", "", 
      [{
        nombreProducto: "",
            cantidadComprada: 0,
            precioUnitario: 0,
            subTotal: 0
      }],0
    );

  }

  ngOnInit(): void {
  }

  // Funciones imprime el link de acceso de cada usuario
  getToken(){
    this._usuariosService.login(this.usuarioModel, "true").subscribe(
      (response)=>{

        console.log(response);
        localStorage.setItem("token",response.token);
      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }
  //Función de identidad
  login(){
    this._usuariosService.login(this.usuarioModel).subscribe(
      (response)=>{

        console.log(response);
      this.getToken();
      localStorage.setItem("identidad", JSON.stringify(response.usuario))

      this._router.navigate(['/categoria']);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

}
