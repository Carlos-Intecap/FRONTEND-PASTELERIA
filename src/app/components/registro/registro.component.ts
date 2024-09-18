import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareaslibresService } from 'src/app/services/tareaslibres.service';
import { Usuario } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public UsuarioModelPost: Usuario;
  public municipios: Number[] = [];

  constructor(
    private _tareasLibresService: TareaslibresService,
    private _router: Router
  ) {
    this.UsuarioModelPost = new Usuario('', '', '', '', '', '', 0, '', '', '');
  }

  clasificacion = [
    { tipo: 'Alta Verapaz' },
    { tipo: 'Baja Verapaz' },
    { tipo: 'Chimaltenango' },
    { tipo: 'Chiquimula' },
    { tipo: 'El progreso' },
    { tipo: 'Escuintla' },
    { tipo: 'Guatemala' },
    { tipo: 'Huehuetenango' },
    { tipo: 'Izabal' },
    { tipo: 'Jalapa' },
    { tipo: 'Jutiapa' },
    { tipo: 'Petén' },
    { tipo: 'Quetzaltenango' },
    { tipo: 'Quiché' },
    { tipo: 'Retalhuleu' },
    { tipo: 'Sacatepéquez' },
    { tipo: 'San Marcos' },
    { tipo: 'Santa Rosa' },
    { tipo: 'Sololá' },
    { tipo: 'Suchitepéquez' },
    { tipo: 'Totonicapán' },
    { tipo: 'Zacapa' },
  ];

  ngOnInit(): void {}

  // listado de municipios
  actualizarMunicipio(departamento: string) {
    switch (departamento) {
      case 'Alta Verapaz':
        this.municipios = [1, 2, 3, 4, 5];
        break;
      case 'Baja Verapaz':
        this.municipios = [6, 7, 8, 9, 10];
        break;
      // Añadir más casos según sea necesario
      default:
        this.municipios = [];
        break;
    }
  }

  postUsuarios() {
    this._tareasLibresService.agregarUsuario(this.UsuarioModelPost).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['login']);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
