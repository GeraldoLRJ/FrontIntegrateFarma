import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }
  
    //getAgendamento(pagina: number, tamanho: number) {
    //  let params = new HttpParams()
    //    .set('pagina', pagina.toString())
    //    .set('tamanho', tamanho.toString());
  
    //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.AGENDAMENTO, {params})
    //}
  
    getAgendamento() {
      return this.http.get(Constant.API_END_POINT + Constant.METHODS.AGENDAMENTO)
    }
    
    saveAgendamento(obj: any) {
      return this.http.post(Constant.API_END_POINT + Constant.METHODS.AGENDAMENTO, obj)
    }
  
    putAgendamento(obj: any, id: number) {
      return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.AGENDAMENTO}/${id}`, obj);
    }
  
    deleteAgendamento(id: number) {
      return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.AGENDAMENTO}/${id}`);
    }
}
