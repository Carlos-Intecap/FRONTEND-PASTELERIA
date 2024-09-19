import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.model';
import { Sucursal } from '../models/sucursal.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteUsuarioService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );


    constructor(public _http: HttpClient) {}

    /*---------------------- SUCURSALES ------------------------*/

  //VER CATEGORIAS
  obtenerSucursales(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verTodasSucursalesRolCliente', {
      headers: headersToken,
    });
  }


  // ver productos por sucursal
  obtenerProductosPorIdSucursal(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verProductosPorSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }


}
