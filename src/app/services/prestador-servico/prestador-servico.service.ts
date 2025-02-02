import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PrestadorServicoService {

  constructor(private http: HttpClient) { }

  getPrestadorServico() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRESTADOR_SERVICO)
  }
    
  savePrestadorServico(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_TIPO_SERVICO, obj)
  }
}
