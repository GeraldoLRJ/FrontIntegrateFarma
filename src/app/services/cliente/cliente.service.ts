import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente() {
      let params = new HttpParams()
        .set('pagina', '0')
        .set('tamanho', '999');

      return this.http.get(Constant.API_END_POINT + 'administrativo/paginado-cliente/', {params})
    }
}
