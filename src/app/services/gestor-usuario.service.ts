import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class GestorUsuarioService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }
  
  /*------------------------ADMINISTRACION DE CATEGORIAS------------------------*/

  //VER CATEGORIAS
  obtenerCategorias(token): Observable <any> {
    let headersToken=this.headersVariable.set('Authorization',token);
    return this._http.get(this.url+'/getCategorias',{ headers: headersToken });
  }

  //AGREGAR CATEGORIAS
  agregarCategoria(modeloCategoria: Categoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloCategoria);
    return this._http.post(this.url + '/agregarCategoria', parametros, { headers: headersToken });
  }

  //ELIMINAR CATEGORIAS
  eliminarCategoria(idCategoria,token){
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarCategoria/' + idCategoria, { headers: headersToken });
  }

  //OBTENER CATEGORIA POR ID
  obtenerCategoriaId(idCategoria,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getCategoriaRolGestorID/' + idCategoria, { headers: headersToken });
  }

  //EDITAR CATEGORIA
  editarCategoria(modeloCategoria: Categoria, token) : Observable<any> {
    let parametros = JSON.stringify(modeloCategoria);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarCategoria/' + modeloCategoria._id, parametros, { headers: headersToken });
  }

  /*------------------------ADMINISTRACION DE EMPRESAS------------------------*/

  //VER EMPRESAS
  obtenerEmpresas(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getEmpresaRolGestor', { headers: headersToken });
  }

  //AGREGAR EMPRESAS
  agregarEmpresas(modeloEmpresa: Empresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    let parametros = JSON.stringify(modeloEmpresa);
    return this._http.post(this.url + '/agregarEmpresaRolGestor', parametros, { headers: headersToken });
  }

  //ELIMINAR EMPRESAS
  eliminarEmpresas(idEmpresa, token) {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarEmpresaRolGestor/' + idEmpresa, { headers: headersToken });
  }

  //OBTENER EMPRESA POR ID
  obtenerEmpresaId(idEmpresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getEmpresaIdRolGestor/' + idEmpresa, { headers: headersToken });
  }

  //EDITAR EMPRESA
  editarEmpresa(modeloEmpresa: Empresa, token): Observable<any> {
    let parametros = JSON.stringify(modeloEmpresa);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarEmpresaRolGestor/' + modeloEmpresa._id, parametros, { headers: headersToken });
  }
}