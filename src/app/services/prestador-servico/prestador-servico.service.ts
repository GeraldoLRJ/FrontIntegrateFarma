import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PrestadorServicoService {

  constructor(private http: HttpClient) { }


  //getPrestadorServico(pagina: number, tamanho: number) {
  //  let params = new HttpParams()
  //    .set('pagina', pagina.toString())
  //    .set('tamanho', tamanho.toString());

  //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.PRESTADOR_SERVICO, {params})
  //}

  getPrestadorServico() {
    let params = new HttpParams()
      .set('pagina', '0')
      .set('tamanho', '999');

    return this.http.get(Constant.API_END_POINT + 'administrativo/paginado-prestador-servico/', {params})
  }
  
  savePrestadorServico(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.PRESTADOR_SERVICO, obj)
  }

  putPrestadorServico(obj: any, id: number) {
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHODS.PRESTADOR_SERVICO}/${id}`, obj);
  }

  deletePrestadorServico(id: number) {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.PRESTADOR_SERVICO}/${id}`);
  }
}
