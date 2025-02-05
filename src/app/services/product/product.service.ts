import { HttpClient } from '@angular/common/http';
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

  //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS)
  //}

  //getTipoServico(pagina: number, tamanho: number) {
  //  let params = new HttpParams()
  //    .set('pagina', pagina.toString())
  //    .set('tamanho', tamanho.toString());

  //  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_PRODUCTS_PAGINATE, {params})
  //}

  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS)
  }

  getCategorys() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORYS)
  }

  addCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_CART, obj)
  }
}
