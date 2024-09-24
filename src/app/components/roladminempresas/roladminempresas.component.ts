import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Empresa} from 'src/app/models/empresa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladminempresas',
  templateUrl: './roladminempresas.component.html',
  styleUrls: ['./roladminempresas.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]

})
export class RoladminempresasComponent implements OnInit {

  public token;
  //VER
  public EmpresaModelGet:Empresa;
  //AGREGAR
  public EmpresaModelPost: Empresa;
  //VER POR ID
  public EmpresaModelGetId: Empresa;

  constructor(
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService

  ) {
    this.titleService.setTitle('Rol admin empresas');
    this.token=this._usuarioService.obtenerToken();

    this.EmpresaModelPost = new Empresa("", "", "", 0, "", "", "", "");

    this.EmpresaModelGetId = new Empresa("", "", "", 0, "", "", "", "");
  }

  //VER EMPRESAS
  getEmpresasRolAdmin(){
    this._adminUsuariosService.getEmpresasRolAdmin(this.token).subscribe(
      (response)=>{
        this.EmpresaModelGet=response.empresas;
        console.log(this.EmpresaModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //AGREGAR EMRPESA
  postEmpresaRolAdmin(){
    this._adminUsuariosService.agregarEmpresasRolAdmin(this.EmpresaModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresasRolAdmin();
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
    );
  }

  //ELIMINAR EMRPESA
  deleteEmpresasRolAdmin(idEmpresa){
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
        this._adminUsuariosService.eliminarEmpresasRolAdmin(idEmpresa,this.token).subscribe(
          (response) => {
            console.log(response);
            this.getEmpresasRolAdmin();
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

  //VER EMPRESA POR ID
  getEmpresaId(idEmpresa){
    this._adminUsuariosService.obtenerEmpresaRolId(idEmpresa, this.token).subscribe(
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
    this._adminUsuariosService.editarEmpresaRolAdmin(this.EmpresaModelGetId, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresasRolAdmin();
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
    this.getEmpresasRolAdmin();
  }

}
