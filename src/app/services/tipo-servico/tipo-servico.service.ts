import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {

  constructor(private http: HttpClient) { }

  getTipoServico() {
    let params = new HttpParams()
      .set('pagina', '0')
      .set('tamanho', '999');

    return this.http.get(Constant.API_END_POINT + Constant.METHODS.TIPO_SERVICO, {params})
  }

  //getTipoServico() {
  //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.TIPO_SERVICO)
  //}
  
  saveTipoServico(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.TIPO_SERVICO, obj)
  }

  putTipoServico(obj: any, id: number) {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.TIPO_SERVICO}/${id}`, obj);
  }

  deleteTipoServico(id: number) {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.TIPO_SERVICO}/${id}`);
  }
}
