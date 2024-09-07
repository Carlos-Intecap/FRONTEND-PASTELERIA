import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Empresa} from 'src/app/models/empresa.model';
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
  public EmpresaModelPost: Empresa;

  // ver por id
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


  //Ver Usuarios
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


    //Agregar Usuarios
    postEmpresaRolAdmin(){
      this._adminUsuariosService.agregarEmpresasRolAdmin(this.EmpresaModelPost, this._usuarioService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          this.getEmpresasRolAdmin();
        },
        (error)=>{
          console.log(<any>error);
        }
      )
     }



     // Eliminar Empresas
     deleteEmpresasRolAdmin(idEmpresa){

      this._adminUsuariosService.eliminarEmpresasRolAdmin(idEmpresa,this.token).subscribe(
        (response)=>{
          console.log(response);

          this.getEmpresasRolAdmin();
        },
        (error)=>{
          console.log(<any>error);
        }
      )
     }

     // ver empresas rol id empresa
     getEmpresaId(idEmpresa){

      this._adminUsuariosService.obtenerEmpresaRolId(idEmpresa, this.token).subscribe(

        (response)=>{
          console.log(response);

          this.EmpresaModelGetId = response.Empresas;

        },

        (error)=>{
          console.log(error)

        }
      )
    }


    // editar empresas

    putEmpresas(){

      this._adminUsuariosService.editarEmpresaRolAdmin(this.EmpresaModelGetId, this.token).subscribe(

        (response)=>{

          console.log(response);

          this.getEmpresasRolAdmin();

        },


      )
    }


  ngOnInit(): void {
    this.getEmpresasRolAdmin();
  }

}
