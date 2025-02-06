import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente() {
      return this.http.get(Constant.API_END_POINT + Constant.METHODS.CLIENTE)
    }
}
