import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// IMPORTACION COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VistarolgestorComponent } from './components/vistarolgestor/vistarolgestor.component';
import { VistaroladminComponent } from './components/vistaroladmin/vistaroladmin.component';
import { RoladmingestoresComponent } from './components/roladmingestores/roladmingestores.component';
import { VistarolfacturadorComponent } from './components/vistarolfacturador/vistarolfacturador.component';
import { RoladminfacturadoresComponent } from './components/roladminfacturadores/roladminfacturadores.component';
import { RoladminclientesComponent } from './components/roladminclientes/roladminclientes.component';
import { RoladminsucursalesComponent } from './components/roladminsucursales/roladminsucursales.component';
import { RoladminempresasComponent } from './components/roladminempresas/roladminempresas.component';
import { RoladminfinalsucursalesComponent } from './components/roladminfinalsucursales/roladminfinalsucursales.component';
import { RolgestorcategoriasComponent } from './components/rolgestorcategorias/rolgestorcategorias.component';

const routes: Routes = [


  //Vistas principales
  { path: 'vistarolgestor', component: VistarolgestorComponent},
  { path: 'vistaroladmin', component: VistaroladminComponent },
  { path: 'vistarolfacturador', component: VistarolfacturadorComponent },


  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'ejemplo', component: EjemploComponent},

  { path: 'roladmingestores', component: RoladmingestoresComponent},
  { path: 'roladminfacturadores', component: RoladminfacturadoresComponent},
  { path: 'roladminclientes', component: RoladminclientesComponent},
  { path: 'roladminempresas', component: RoladminempresasComponent},
  /* VISTAS EXCLUSIVAMENTE PARA ADMINISTRAR SUCURSALES Y AGREGARLAS */
  { path: 'roladminsucursales/:idEmpresa', component: RoladminsucursalesComponent},
  { path: 'roladminfinalsucursales/:idUsuario', component: RoladminfinalsucursalesComponent},

  //Categorias
  { path: 'rolgestorcategorias', component: RolgestorcategoriasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
