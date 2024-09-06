import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empresa } from 'src/app/models/empresa.model';

//Llamando al modelo
import { Usuario } from 'src/app/models/usuarios.model';
//Llamando al servicio
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
//Llamando al token
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-roladminempresas',
  templateUrl: './roladminempresas.component.html',
  styleUrls: ['./roladminempresas.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminempresasComponent implements OnInit {
  public token;
  //Ver
  public EmpresaModelGet:Empresa;
  //Agregar
  public EmpresaModelPost:Empresa;
  //Ver por ID
  public EmpresaModelGetId:Empresa;

  constructor(
    private titleService: Title,
    private _adminUsuariosService:AdminUsuariosService,
    private _usuarioService:UsuarioService
  )
  { 
    this.titleService.setTitle('Rol admin empresa');
    this.token=this._usuarioService.obtenerToken();
    //Agregar
    this.EmpresaModelPost = new Empresa("","","",0,"","","");
    //Ver por Id
    this.EmpresaModelGetId = new Empresa("","","",0,"","","");
  }

  //CRUD
  //Ver Empresas
  getEmpresasRolAdmin(){
    this._adminUsuariosService.getEmpresasRolAdmin(this.token).subscribe(
      (response)=>{
        this.EmpresaModelGet=response.Empresas;
        console.log(this.EmpresaModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //Agregar Empresas
  postEmpresaRolAdmin(){
    this._adminUsuariosService.agregarEmpresaRolAdmin(this.EmpresaModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresasRolAdmin();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  //Eliminar Empresas
  deleteEmpresasRolAdmin(idEmpresa){
    this._adminUsuariosService.eliminarEmpresaRolAdmin(idEmpresa,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresasRolAdmin();
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

  //Buscar empresa por ID
  getEmpresaIdRolAdmin(idEmpresa){
    this._adminUsuariosService.obtenerEmpresaIdRolAdmin(idEmpresa,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.EmpresaModelGetId=response.Empresas;
      },(error)=>{
        console.log(error);
      }
    )
  }

  putEmpresas(){
    this._adminUsuariosService.editarEmpresaRolAdmin(this.EmpresaModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresasRolAdmin();
      }
    )
  }
  
  ngOnInit(): void {
    this.getEmpresasRolAdmin();
  }

}
