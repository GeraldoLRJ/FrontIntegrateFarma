import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //getUsuarioAdmin() {
  //  return this.http.get(`${Constant.API_END_POINT + Constant.METHODS.USUARIO_ADMIN}/listar-administradores`)
  //}

  getUsuarioAdmin() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.USUARIO_ADMIN)
  }
}
