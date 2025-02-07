import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }
  
    getAgendamento() {
      let params = new HttpParams()
        .set('pagina', '0')
        .set('tamanho', '999');
  
      return this.http.get(Constant.API_END_POINT + Constant.METHODS.AGENDAMENTO, {params})
    }
  
    //getAgendamento() {
    //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.AGENDAMENTO)
    //}
    
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
