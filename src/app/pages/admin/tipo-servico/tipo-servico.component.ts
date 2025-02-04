import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoServicoService } from '../../../services/tipo-servico/tipo-servico.service';

@Component({
  selector: 'app-tipo-servico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tipo-servico.component.html',
  styleUrl: './tipo-servico.component.css'
})
export class TipoServicoComponent {
  showSideBar: boolean = false;

  tipoServicoObj: any = {
    "nomeEspecialidade": "",
    "valor": 0
  }

  titleSideBar = "";

  tipoServicoList: any [] = [];

  constructor(private tipoServicoSrv: TipoServicoService) {
    
  }

  ngOnInit(): void {
    this.getTipoServico();
  }

  //getTipoServico() {
  //  this.tipoServicoSrv.getTipoServico(1, 5).subscribe((res:any)=>{
  //    this.tipoServicoList = res;
  //  })
  //}

  getTipoServico() {
    this.tipoServicoSrv.getTipoServico().subscribe((res:any)=>{
      this.tipoServicoList = res.elementos;
    })
  }

  onSave() {
    this.tipoServicoSrv.saveTipoServico(this.tipoServicoObj).subscribe((res:any)=>{
      if(res.resul) {
        alert("Produto Cadastrado!");
        this.getTipoServico();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(item: any) {
    this.tipoServicoObj = item;
    this.titleSideBar = "Editando "+item.nomeEspecialidade;
    this.openSideBar();
  }

  onCreate() {
    this.titleSideBar = "Criando Novo Serviço";
    this.openSideBar();
  }

  openSideBar() {
    this.showSideBar = true;
  }

  closeSideBar() {
    this.showSideBar = false;
  }
}
