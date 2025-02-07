import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //getProducts(pagina: number, tamanho: number) {
  //  let params = new HttpParams()
  //    .set('pagina', pagina.toString())
  //    .set('tamanho', tamanho.toString());

  //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.PRODUCTS, {params})
  //}

  getProducts() {
    let params = new HttpParams()
      .set('pagina', '0')
      .set('tamanho', '999');

    return this.http.get(Constant.API_END_POINT + 'produto/paginado-produtos/', {params})
  }

  saveProducts(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.PRODUCTS, obj)
  }

  putProducts(obj: any, id: number) {
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHODS.PRODUCTS}/${id}`, obj);
  }

  deleteProducts(id: number) {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.PRODUCTS}/${id}`);
  }

  finalizarCompra(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.FINALIZA_COMPRA, obj)
  }
}
