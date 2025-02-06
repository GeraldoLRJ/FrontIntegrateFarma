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
  
  productList: any = {
      "nomeEspecialidade": "",
      "valor": 0
    }
  
    titleSideBar = "";
  
    editing = false;
  
    tipoServicoList: any [] = [];
  
    constructor(private produtoSrv: ProductService) {
      
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
    this.produtoSrv.getProducts().subscribe((res:any)=>{
      this.productList = res.elementos;
    })
  }
  
    onSave(item: any) {
      //this.produtoSrv.saveTipoServico(item).subscribe((res:any)=>{
        //if(res.resul) {
        //  alert("Tipo de Serviço Cadastrado!");
        //  this.getTipoServico();
        //  this.closeSideBar();
       // } else {
       //   alert(res.message);
       // }
    //  })
    }
  
    onEditing(item: any) {
      //this.produtoObj = { ...item};
      this.titleSideBar = "Editando "+item.nomeEspecialidade;
      this.editing = true;
      this.openSideBar();
    }
  
    onEdit(item: any) {
      //this.produtoSrv.putTipoServico(item, item.idEspecialidade).subscribe((res:any)=>{
      //  if(res.resul) {
        //  alert("Tipo de Serviço Editado!");
          //this.getTipoServico();
       //   this.closeSideBar();
      //  } else {
       //   alert(res.message);
      //  }
     // })
    }
  
    onDelete(item: any) {
     // this.produtoSrv.deleteTipoServico(item).subscribe((res:any)=>{
       // if(res.resul) {
        //  alert("Tipo de Serviço Apagado!");
         // this.getTipoServico();
       // } else {
       //   alert(res.message);
       // }
     // })
    }
  
    onCreate() {
      this.titleSideBar = "Criando Novo Serviço";
  
      //this.produtoObj.nomeEspecialidade = "";
      //this.produtoObj.valor = 0;
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
