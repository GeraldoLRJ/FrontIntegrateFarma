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
  formasPagamento: any = [
    {
      "nome": "Boleto",
      "prefixo": "boleto"
    },
    {
      "nome": "Cartão",
      "prefixo": "cartao"
    }
  ]
  compra: any = {
    "forma_pagamento": "",
    "parcelas": 1,
    "observacao": ""
  }

  response: any = {
    "dataVenda": "",
    "totalVenda": 0,
    "observacoes": "",
    "quantidadeParcelas": 1,
    "observacoesParcela": "",
    "produtos": []
  }

  constructor(private prodSrv:ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

 // getAllProducts() {
  //  this.prodSrv.getProducts(1, 5).subscribe((res:any)=>{
   //   this.productList = res.elementos;
  //  })
 // }
  
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

    if(this.cartList.length > 0) {
      this.openCartBar();
    }
  }

  openCartBar() {
    this.titleSideBar = 'Carrinho de Compras';
    this.carrinho = true;
  }

  increaseQuantity(item: any) {
    item.quantidade++;
  }

  decreaseQuantity(item: any) {
    if (item.quantidade > 1) {
        item.quantidade--;
    } else {
        this.removeFromCart(item);
    }
  }

  removeFromCart(item: any) {
    this.cartList = this.cartList.filter(cartItem => cartItem.id !== item.id);

    if(this.cartList.length == 0) {
      this.carrinho = false;
      this.finalizarCompra = false;
    }
  }

  getTotalCompra(): number {
    return this.cartList.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  updateFormasPagamento() {
    this.compra.forma_pagamento;
  }

  finalizar() {
    this.response = {
        "dataVenda": new Date(),
        "totalVenda": this.getTotalCompra(),
        "observacoes": this.compra.observacao + ' | Forma de Pagamento: ' + this.compra.forma_pagamento,
        "quantidadeParcelas": this.compra.parcelas,
        "produtos": this.cartList.map(item => ({
            "idProduto": item.id,
            "quantidade": item.quantidade,
            "subtotal": item.preco * item.quantidade
        }))
    };

    this.prodSrv.finalizarCompra(this.response).subscribe((res:any)=>{
      if(res.resul) {
        alert("Compra Realizada!");
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        alert(res.message);
      }
    })
  }

  finalizaCompra() {
    this.finalizarCompra = true;
  }

  validateParcelas() {
    if (this.compra.parcelas < 1) {
        this.compra.parcelas = 1;
    } else if (this.compra.parcelas > 12) {
        this.compra.parcelas = 12;
    }
}

}
