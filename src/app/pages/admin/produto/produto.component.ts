import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  showSideBar: boolean = false;
  
  produtoObj: any = {
      "descricao": "",
      "preco": 0,
      "linkImagem": "",
      "quantidadeEstoque": 0
    }
  
    titleSideBar = "";
  
    editing = false;
  
    productList: any [] = [];
  
    constructor(private produtoSrv: ProductService) {
      
    }

    ngOnInit(): void {
      this.getAllProducts();
    }
  
   //getAllProducts() {
  //    this.prodSrv.getProducts(1, 5).subscribe((res:any)=>{
  //     this.productList = res.elementos;
   //   })
  // }
  
  getAllProducts() {
    this.produtoSrv.getProducts().subscribe((res:any)=>{
      this.productList = res.elementos;
    })
  }
  
    onSave(item: any) {
      this.produtoSrv.saveProducts(item).subscribe((res:any)=>{
        if(res.resul) {
          alert("Tipo de Serviço Cadastrado!");
          this.getAllProducts();
         this.closeSideBar();
        } else {
          alert(res.message);
        }
      })
    }
  
    onEditing(item: any) {
      this.produtoObj = { ...item};
      this.titleSideBar = "Editando "+item.descricao;
      this.editing = true;
      this.openSideBar();
    }
  
    onEdit(item: any) {
      this.produtoSrv.putProducts(item, item.id).subscribe((res:any)=>{
        if(res.resul) {
          alert("Tipo de Serviço Editado!");
          this.getAllProducts();
          this.closeSideBar();
        } else {
          alert(res.message);
        }
      })
    }
  
    onDelete(item: any) {
      this.produtoSrv.deleteProducts(item).subscribe((res:any)=>{
        if(res.resul) {
          alert("Tipo de Serviço Apagado!");
          this.getAllProducts();
        } else {
          alert(res.message);
        }
      })
    }
  
    onCreate() {
      this.titleSideBar = "Criando Novo Serviço";
  
      this.produtoObj.nomeEspecialidade = "";
      this.produtoObj.valor = 0;
      this.editing = false;
  
      this.openSideBar();
    }
  
    openSideBar() {
      this.showSideBar = true;
    }
  
    closeSideBar() {
      this.showSideBar = false;
      this.editing = false;
    }
}
