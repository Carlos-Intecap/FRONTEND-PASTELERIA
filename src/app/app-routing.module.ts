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
import { RoladminusuariosComponent } from './components/roladminusuarios/roladminusuarios.component';
import { RoladmincategoriasyproductosComponent } from './components/roladmincategoriasyproductos/roladmincategoriasyproductos.component';
import { RoladmincateComponent } from './components/roladmincate/roladmincate.component';
import { RolgestorempresasComponent } from './components/rolgestorempresas/rolgestorempresas.component';
import { RolgestorsucursalesComponent } from './components/rolgestorsucursales/rolgestorsucursales.component';
import { RolgestorproductosComponent } from './components/rolgestorproductos/rolgestorproductos.component';
import { VerGananciasComponent } from './components/ver-ganancias/ver-ganancias.component';
import { VistarolclienteComponent } from './components/vistarolcliente/vistarolcliente.component';
import { RolclientesucursalesComponent } from './components/rolclientesucursales/rolclientesucursales.component';
import { RolclienteproductosComponent } from './components/rolclienteproductos/rolclienteproductos.component';
import { RolclientecarritoComponent } from './components/rolclientecarrito/rolclientecarrito.component';
import { RoladminrepartidoresComponent } from './components/roladminrepartidores/roladminrepartidores.component';
import { RoladmincajerosComponent } from './components/roladmincajeros/roladmincajeros.component';

const routes: Routes = [


  //Vistas principales
  { path: 'vistarolgestor', component: VistarolgestorComponent},
  { path: 'vistaroladmin', component: VistaroladminComponent },
  { path: 'vistarolfacturador', component: VistarolfacturadorComponent },
  { path: 'vistarolcliente', component: VistarolclienteComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'ejemplo', component: EjemploComponent},

  { path: 'roladmingestores', component: RoladmingestoresComponent},
  { path: 'roladminfacturadores', component: RoladminfacturadoresComponent},
  { path: 'roladminclientes', component: RoladminclientesComponent},
  { path: 'roladminempresas', component: RoladminempresasComponent},
  { path: 'roladminrepartidores', component: RoladminrepartidoresComponent},
  { path: 'roladmincajeros', component: RoladmincajerosComponent},

  /* VISTAS EXCLUSIVAMENTE PARA ADMINISTRAR SUCURSALES Y AGREGARLAS */
  { path: 'roladminsucursales/:idEmpresa', component: RoladminsucursalesComponent},
  { path: 'roladminfinalsucursales/:idUsuario', component: RoladminfinalsucursalesComponent},

  //Categorias
  { path: 'roladminusuarios', component: RoladminusuariosComponent},
  { path: 'roladmincategoriasyproductos', component: RoladmincategoriasyproductosComponent},
  { path: 'roladmincategorias', component: RoladmincateComponent},



  // VISTAS DEL ROL GESTOR
  { path: 'rolgestorempresas', component: RolgestorempresasComponent},
  // para agregar productos
  { path: 'rolgestorsucursales', component: RolgestorsucursalesComponent},
  { path: 'rolgestorcategorias/:idSucursal', component: RolgestorcategoriasComponent},
  { path: 'rolgestorproductos/:idCategoria', component: RolgestorproductosComponent},
  // para ver la grafica de ganancias
  { path: 'verganancias', component: VerGananciasComponent},

  // VISTAS DEL ROL CLIENTE
  { path: 'rolclientesucursales', component: RolclientesucursalesComponent},
  { path: 'rolclienteproductos/:idSucursal', component: RolclienteproductosComponent},
  { path: 'rolclientecarrito/:idProducto', component: RolclientecarritoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
