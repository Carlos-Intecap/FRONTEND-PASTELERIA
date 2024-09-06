import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  public url: String = 'http://localhost:3000/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;


  constructor(public _http: HttpClient) { }


  

  

  /*--------------- ADMINISTRACION DEL ROL GESTOR---------------------- */

  /*No 1. Ver a los usuarios con rol Gestor*/
  getUsuariosRolGestor(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioRolGestor', { headers: headersToken });
  }


  agregarUsuarioRolGestor(modeloUsuario: Usuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)

    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url + '/agregarRolGestor', parametros, { headers: headersToken });

  }

  eliminarUsuarioRolGestor(idUsuario, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarRolGestor/' + idUsuario, { headers: headersToken });

  }

  obtenerRolGestorId(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getUsuarioRolGestor/' + idUsuario, { headers: headersToken });

  }

  
  editarRolGestor(modeloUsuario: Usuario, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuario);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarRolGestor/' + modeloUsuario._id, parametros, { headers: headersToken })

  }


  /*--------------- ADMINISTRACION DEL ROL FACTURADOR---------------------- */
//Ver usuarios con el rol Facturador
getUsuariosRolFacturador(token): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.get(this.url + '/getUsuarioSRolFacturador', { headers: headersToken });
}

agregarUsuarioRolFacturador(modeloUsuario: Usuario, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token)

  let parametros = JSON.stringify(modeloUsuario);

  return this._http.post(this.url + '/agregarRolFacturador', parametros, { headers: headersToken });

}

eliminarUsuarioRolFacturador(idUsuario, token) {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.delete(this.url + '/eliminarRolFacturador/' + idUsuario, { headers: headersToken });

}

obtenerRolFacturadorId(idUsuario, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.get(this.url + '/getUsuarioRolFacturador/' + idUsuario, { headers: headersToken });

}

editarRolFacturador(modeloUsuario: Usuario, token): Observable<any> {

  let parametros = JSON.stringify(modeloUsuario);

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(this.url + '/editarRolFacturador/' + modeloUsuario._id, parametros, { headers: headersToken })

}

  /*--------------- ADMINISTRACION DEL ROL CLIENTE---------------------- */

  getUsuariosRolCliente(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioSRolCliente', { headers: headersToken });
  }

  agregarUsuarioRolCliente(modeloUsuario: Usuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)

    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url + '/agregarRolCliente', parametros, { headers: headersToken });

  }

  eliminarUsuarioRolCliente(idUsuario, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarRolCliente/' + idUsuario, { headers: headersToken });

  }

  obtenerRolClienteId(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getUsuarioRolCliente/' + idUsuario, { headers: headersToken });

  }
  
  editarRolCliente(modeloUsuario: Usuario, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuario);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarRolCliente/' + modeloUsuario._id, parametros, { headers: headersToken })

  }

}
