import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  productList: any[]=[];
  cartList: any[]=[];

  finalizarCompra: boolean = false;
  titleSideBar = "";
  carrinho: boolean = false;

  constructor(private prodSrv:ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res:any)=>{
      this.productList = res.elementos;
    })
  }

  addCart(item: any) {
    let existingItem = this.cartList.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantidade++;
    } else {
        this.cartList.push({ ...item, quantidade: 1 });
    }

    if(this.cartList.length == 0) {
      this.openCartBar();
    }
  }

  openCartBar() {
    this.titleSideBar = 'Carrinho de Compras';
    this.carrinho = true;
  }
}
