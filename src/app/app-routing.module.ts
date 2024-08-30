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

const routes: Routes = [


  //Vistas principales
  { path: 'vistarolgestor', component: VistarolgestorComponent},
  { path: 'vistaroladmin', component: VistaroladminComponent },
  { path: 'vistarolfacturador', component: VistarolfacturadorComponent },


  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'ejemplo', component: EjemploComponent},

  { path: 'roladmingestores', component: RoladmingestoresComponent},
  { path: 'roladminfacturadores', component: RoladminfacturadoresComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
