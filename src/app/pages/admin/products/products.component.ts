import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  showSideBar: boolean = false;

  productObj: any = {
    "id_produto": 0,
    "nm_produto": "",
    "ds_produto": "",
    "qtd_unidade": 0,
    "qtd_estoque": 0,
    "valor_produto": 0,
    "nr_lote": 0,
    "dt_validate": new Date(),
    "dt_cadastro": new Date(),
    "dt_modificacao": "2025-01-25T21:48:18.081Z",
    "dt_desativacao": "2025-01-25T21:48:18.081Z",
    "id_categoria": 0,
    "image_url": ""
  }

  categoryList: any [] = [];
  productsList: any [] = [];

  constructor(private productSrv: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategorys();
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productsList = res;
    })
  }

  getAllCategorys() {
    this.productSrv.getCategorys().subscribe((res:any)=>{
      this.categoryList = res;
    })
  }

  onSave() {
    this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.resul) {
        alert("Produto Cadastrado!");
        this.getProducts();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(item: any) {
    this.productObj = item;
    this.openSideBar();
  }

  openSideBar() {
    this.showSideBar = true;
  }

  closeSideBar() {
    this.showSideBar = false;
  }
}
