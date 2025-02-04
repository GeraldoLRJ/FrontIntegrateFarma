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

  showSideBar: boolean = false;

  constructor(private prodSrv:ProductService) {

  }

  ngOnInit(): void {
    
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res:any)=>{
      this.productList = res.data;
    })
  }

  addCart(item: any) {
    this.prodSrv.addCart(item).subscribe((res:any)=>{
      if(res.resul) {
        alert("Prestador de Serviço Cadastrado!");
      } else {
        alert(res.message);
      }
    })
  }
}
