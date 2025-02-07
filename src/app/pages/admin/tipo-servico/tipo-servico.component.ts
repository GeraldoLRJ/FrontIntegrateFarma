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

  editing = false;

  tipoServicoList: any [] = [];

  constructor(private tipoServicoSrv: TipoServicoService) {
    
  }

  ngOnInit(): void {
    this.getTipoServico();
  }

  //getTipoServico() {
  //  this.tipoServicoSrv.getTipoServico(1, 5).subscribe((res:any)=>{
  //    this.tipoServicoList = res.elementos;
  //  })
  //}

  getTipoServico() {
    this.tipoServicoSrv.getTipoServico().subscribe((res:any)=>{
      this.tipoServicoList = res.elementos;
    })
  }

  onSave(item: any) {
    this.tipoServicoSrv.saveTipoServico(item).subscribe((res:any)=>{
      if(res) {
        alert("Tipo de Serviço Cadastrado!");
        this.getTipoServico();
        this.closeSideBar();
      } else {
        alert("Falha ao cadastrar Tipo de Serviço");
      }
    })
  }

  onEditing(item: any) {
    this.tipoServicoObj = { ...item};
    this.titleSideBar = "Editando "+item.nomeEspecialidade;
    this.editing = true;
    this.openSideBar();
  }

  onEdit(item: any) {
    this.tipoServicoSrv.putTipoServico(item, item.idEspecialidade).subscribe((res:any)=>{
      if(res) {
        alert("Tipo de Serviço Editado!");
        this.getTipoServico();
        this.closeSideBar();
      } else {
        alert("Tipo de Serviço Falhou!");
      }
    })
  }

  onDelete(item: any) {
    this.tipoServicoSrv.deleteTipoServico(item).subscribe((res:any)=>{
      if(res) {
        alert("Tipo de Serviço Apagado!");
        this.getTipoServico();
      } else {
        alert("Tipo de Serviço Falhou!");
      }
    })
  }

  onCreate() {
    this.titleSideBar = "Criando Novo Serviço";

    this.tipoServicoObj.nomeEspecialidade = "";
    this.tipoServicoObj.valor = 0;
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
