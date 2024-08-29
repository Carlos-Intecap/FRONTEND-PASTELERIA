import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})


export class CategoriasService {

  //1. Ruta
  public url: String = 'http://localhost:3000/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  // Ver categorias
  obtenerCategorias(): Observable <any> {
    return this._http.get(this.url + '/getCategorias', { headers: this.headersVariable});
  }



}
