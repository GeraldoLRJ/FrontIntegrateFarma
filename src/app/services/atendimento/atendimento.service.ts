import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor(private http: HttpClient) { }

  getAtendimentos() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.ATENDIMENTO)
  }

  postAtendimento(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ATENDIMENTO, obj)
  }
}
