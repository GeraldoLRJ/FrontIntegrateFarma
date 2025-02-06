import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendamentoService } from '../../../services/agendamento/agendamento.service';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { PrestadorServicoService } from '../../../services/prestador-servico/prestador-servico.service';

@Component({
  selector: 'app-agendamento-web-site',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento-web-site.component.html',
  styleUrl: './agendamento-web-site.component.css'
})
export class AgendamentoWebSiteComponent {
    showSideBar: boolean = false;
        
    agendamentoObj: any = {
      "idCliente": 1,
      "idPrestadorServico": 1,
      "tratamento": "",
      "exame": "",
      "dataHorario": new Date().toISOString().slice(0, 16),
      "valorAgendamento": 0,
      "status": ""
    }
  
    titleSideBar = "";
  
    editing = false;
  
    agendamentoList: any [] = [];
    clienteList: any [] = [];
    prestadorServicoList: any [] = [];
    minDate = new Date().toISOString().slice(0, 16);
  
    constructor(private agendamentoServiceSrv: AgendamentoService, 
      private clienteSrv: ClienteService, 
      private PrestadorSrv: PrestadorServicoService
    ) {
      
    }

    ngOnInit(): void {
      this.getAgendamento();
      this.getCliente();
      this.getPrestadorServico();
    }
  
    //getPrestadorServico() {
    //  this.agendamentoServiceSrv.getPrestadorServico(1, 5).subscribe((res:any)=>{
    //    this.agendamentoList = res.elementos;
    //  })
    //}
  
    getAgendamento() {
      this.agendamentoServiceSrv.getAgendamento().subscribe((res:any)=>{
        this.agendamentoList = res.elementos;
      })
    }
  
    getCliente() {
      this.clienteSrv.getCliente().subscribe((res:any)=>{
        this.clienteList = res.elementos;
      })
    }
  
    getPrestadorServico() {
      this.PrestadorSrv.getPrestadorServico().subscribe((res:any)=>{
        this.prestadorServicoList = res.elementos;
      })
    }
  
    onSave(item: any) {
      this.agendamentoServiceSrv.saveAgendamento(item).subscribe((res:any)=>{
        if(res.resul) {
          alert("Agendamento Cadastrado!");
          this.getAgendamento();
          this.closeSideBar();
        } else {
          alert(res.message);
        }
      })
    }
  
    onEditing(item: any) {
      this.agendamentoObj = { ...item};
      this.titleSideBar = "Visualizando "+item.tratamento;
      this.editing = true;
      this.openSideBar();
    }
  
    //updateEspecialidade() {
    //  const especialidadeSelecionada = this.tipoServicoList.find(item => item.idEspecialidade == this.agendamentoObj.idEspecialidade);
    //  if (especialidadeSelecionada) {
    //      this.agendamentoObj.nomeEspecialidade = especialidadeSelecionada.nomeEspecialidade;
    //      this.agendamentoObj.idEspecialidade = especialidadeSelecionada.idEspecialidade;
    //  }
    //}
  
    updateIdPrestadorServico() {
      const prestadorSelecionada = this.prestadorServicoList.find(item => item.idPrestadorServico == this.agendamentoObj.idPrestadorServico);
      if (prestadorSelecionada) {
          this.agendamentoObj.idPrestadorServico = prestadorSelecionada.idPrestadorServico;
      }
    }

    updateIdCliente() {
      const clienteSelecionada = this.clienteList.find(item => item.idCliente == this.agendamentoObj.idCliente);
      if (clienteSelecionada) {
          this.agendamentoObj.idCliente = clienteSelecionada.idCliente;
      }
    }
  
    onEdit(item: any) {
      this.agendamentoServiceSrv.putAgendamento(item, item.idPrestadorServico).subscribe((res:any)=>{
        if(res.resul) {
          alert("Agendamento Editado!");
          this.getAgendamento();
          this.closeSideBar();
        } else {
          alert(res.message);
        }
      })
    }
  
    onDelete(item: any) {
      this.agendamentoServiceSrv.deleteAgendamento(item).subscribe((res:any)=>{
        if(res.resul) {
          alert("Agendamento Apagado!");
          this.getAgendamento();
        } else {
          alert(res.message);
        }
      })
    }
  
    onCreate() {
      this.titleSideBar = "Criando Novo Agendamento";
        
      this.agendamentoObj.idCliente = 1;
      this.agendamentoObj.idPrestadorServico = 1;
      this.agendamentoObj.tratamento = "";
      this.agendamentoObj.exame = "";
      this.agendamentoObj.dataHorario = "";
      this.agendamentoObj.valorAgendamento = 0;
      this.agendamentoObj.status = "";
      
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
