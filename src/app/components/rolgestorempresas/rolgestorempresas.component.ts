import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empresa } from 'src/app/models/empresa.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolgestorempresas',
  templateUrl: './rolgestorempresas.component.html',
  styleUrls: ['./rolgestorempresas.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})
export class RolgestorempresasComponent implements OnInit {
  public token;
  public EmpresaModelGet: Empresa;
  public EmpresaModelPost: Empresa;
  public EmpresaModelGetId: Empresa;

  constructor(
    private titleService: Title,
    private _gestorUsuariosService: GestorUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol gestor empresas');
    this.token = this._usuarioService.obtenerToken();
    this.EmpresaModelPost = new Empresa("", "", "", 0, "", "", "", "");
    this.EmpresaModelGetId = new Empresa("", "", "", 0, "", "", "", "");
  }

  //VER EMPRESAS
  getEmpresas(){
    this._gestorUsuariosService.obtenerEmpresas(this.token).subscribe(
      (response)=>{
        this.EmpresaModelGet = response.empresas;
        console.log(this.EmpresaModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //AGREGAR EMPRESAS
  postEmpresas(){
    this._gestorUsuariosService.agregarEmpresas(this.EmpresaModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Empresa agregada exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },(error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Datos incompletos o nombre existente",
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }
  
  //ELIMINAR EMPRESAS
  deleteEmpresas(idEmpresa){
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
        this._gestorUsuariosService.eliminarEmpresas(idEmpresa,this.token).subscribe(
          (response) => {
            console.log(response);
            this.getEmpresas();
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'La empresa ha sido eliminada exitosamente.',
              showConfirmButton: false,
              timer: 1500
            });
          },(error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar la empresa.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }
  
  //OBTENER EMRPESA POR ID
  getEmpresaId(idEmpresa){
    this._gestorUsuariosService.obtenerEmpresaId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.EmpresaModelGetId = response.empresas;
      },(error)=>{
        console.log(error)
      }
    )
  }
  
  //EDITAR EMPRESA
  putEmpresas(){
    this._gestorUsuariosService.editarEmpresa(this.EmpresaModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresas();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Empresa editada correctamente',
          showConfirmButton: false,
          timer: 1500
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

  ngOnInit(): void {
    this.getEmpresas();
  }
}