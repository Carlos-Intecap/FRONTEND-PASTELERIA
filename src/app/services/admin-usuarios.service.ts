import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  public url: String = 'http://localhost:3000/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  /*No 1. Ver a los usuarios con rol Gestor*/
  getUsuariosRolGestor(token):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url +'/getUsuarioRolGestor' , {headers:headersToken});
  }
  //Ver usuarios con el rol Facturador
  getUsuariosRolFacturador(token):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioSRolFacturador', {headers:headersToken});
  }
  //Ver usuarios con el rol Cliente
  getUsuariosRolCliente(token):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuariosRolCliente', {headers:headersToken});
  }
}
