import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  public identidad;

  constructor(
    public _usuarioService: UsuarioService
  ) 
  {
    /* para mostrar el nombre del usuario jajajajaja */
    /* this.identidad = JSON.parse(localStorage.getItem('identidad')); */
    // cada vez que inicie un valor el componente sera nuevo :)
    this.identidad = this._usuarioService.obtenerIdentidad();
   }


  ngOnInit(): void {
    console.log(this.identidad);
  }
  clearToken(){
    localStorage.clear();
    Swal.fire({
        title: '¡Éxito!',
        text: 'Has cerrado sesión correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
  }

}
