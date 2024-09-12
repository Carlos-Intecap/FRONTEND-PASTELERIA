import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empresa } from 'src/app/models/empresa.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
      },(error)=>{
        console.log(<any>error);
      }
    )
  }
  
  //ELIMINAR EMPRESAS
  deleteEmpresas(idEmpresa){
    this._gestorUsuariosService.eliminarEmpresas(idEmpresa,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },(error)=>{
        console.log(<any>error);
      }
    )
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
      (response)=>{
        console.log(response);
        this.getEmpresas();
      }
    )
  }

  ngOnInit(): void {
    this.getEmpresas();
  }
}