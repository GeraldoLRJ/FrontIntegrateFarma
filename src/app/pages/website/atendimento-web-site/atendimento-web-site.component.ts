import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtendimentoService } from '../../../services/atendimento/atendimento.service';

@Component({
  selector: 'app-atendimento-web-site',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atendimento-web-site.component.html',
  styleUrl: './atendimento-web-site.component.css'
})
export class AtendimentoWebSiteComponent {
  productList: any[]=[];
  
  showSideBar: boolean = false;

  constructor(private prodSrv:AtendimentoService) {

  }

  ngOnInit(): void {
    
  }

  getAllAtendimentos() {
    this.prodSrv.getAtendimentos().subscribe((res:any)=>{
      this.productList = res.data;
    })
  }

  postAtendimento(item: any) {
    this.prodSrv.postAtendimento(item).subscribe((res:any)=>{
      if(res) {
        alert("Atendimento Cadastrado!");
      } else {
        alert("Atendimento Falhou!");
      }
    })
  }
}
