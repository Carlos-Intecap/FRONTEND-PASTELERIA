import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VistarolgestorComponent } from './components/vistarolgestor/vistarolgestor.component';
import { VistaroladminComponent } from './components/vistaroladmin/vistaroladmin.component';
import { RoladmingestoresComponent } from './components/roladmingestores/roladmingestores.component';
import { VistarolfacturadorComponent } from './components/vistarolfacturador/vistarolfacturador.component';
import { RoladminfacturadoresComponent } from './components/roladminfacturadores/roladminfacturadores.component';
import { RoladminclientesComponent } from './components/roladminclientes/roladminclientes.component';
import { RoladminsucursalesComponent } from './components/roladminsucursales/roladminsucursales.component';
import { RoladminempresasComponent } from './components/roladminempresas/roladminempresas.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { RoladminfinalsucursalesComponent } from './components/roladminfinalsucursales/roladminfinalsucursales.component';
import { RolgestorcategoriasComponent } from './components/rolgestorcategorias/rolgestorcategorias.component';
import { RoladminusuariosComponent } from './components/roladminusuarios/roladminusuarios.component';
import { RoladmincategoriasyproductosComponent } from './components/roladmincategoriasyproductos/roladmincategoriasyproductos.component';
import { RoladmincateComponent } from './components/roladmincate/roladmincate.component';
import { RolgestorempresasComponent } from './components/rolgestorempresas/rolgestorempresas.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    EjemploComponent,
    VistarolgestorComponent,
    VistaroladminComponent,
    RoladmingestoresComponent,
    VistarolfacturadorComponent,
    RoladminfacturadoresComponent,
    RoladminclientesComponent,
    RoladminsucursalesComponent,
    RoladminempresasComponent,
    RoladminfinalsucursalesComponent,
    RolgestorcategoriasComponent,
    RoladminusuariosComponent,
    RoladmincategoriasyproductosComponent,
    RoladmincateComponent,
    RolgestorempresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
