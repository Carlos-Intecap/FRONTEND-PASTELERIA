import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.model';
import { Sucursal } from '../models/sucursal.model';
import { Carrito } from '../models/carrito.model';

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


  agregarProductoAlCarrito(modeloProducto: Producto, token): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/registrarCarritoPorId/' + modeloProducto._id, parametros, { headers: headersToken });

  }



  /* carritos funcion 1 prueba */
  AgregarNuevoProducto(modeloCarrito: Carrito, token: string, idProducto: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloCarrito);

    return this._http.put(this.url + '/registrarCarritoPorId/' + idProducto, parametros, { headers: headersToken });
    
  }

  /* carritos funcion 2 prueba */
  putProductoCarrito(idProducto: String, cantidad: Number, token): Observable<any> {
    const parametros = JSON.stringify({ cantidad }); // Solo envía la cantidad
    const headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(
        this.url + '/registrarCarritoPorId/' + idProducto, parametros, { headers: headersToken }
    );
}

  obtenerProductoid(idProducto, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verProductoPorIdRolCliente/' + idProducto, { headers: headersToken });

  }


  obtenerCarritos(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);
    
    return this._http.get(this.url + '/verCarritosClienteRegistrado', {headers: headersToken,});
  }


}
