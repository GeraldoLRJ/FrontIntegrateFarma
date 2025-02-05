import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrestadorServicoService } from '../../../services/prestador-servico/prestador-servico.service';
import { TipoServicoService } from '../../../services/tipo-servico/tipo-servico.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-prestador-servico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestador-servico.component.html',
  styleUrl: './prestador-servico.component.css'
})
export class PrestadorServicoComponent {
  showSideBar: boolean = false;
  
  prestadorServicoObj: any = {
      "crm": "",
      "idEspecialidade": 0,
      "idUsuario": 0,
      "valor": 0,
      "nomeEspecilidade": "",
      "cpf": "",
      "email": "",
      "nome": "",
      "nomeCargo": "",
      "contatos": "",
      "cep": "",
      "numero": 0
  }

  titleSideBar = "";

  editing = false;

  prestadorServicoList: any [] = [];
  tipoServicoList: any [] = [];
  usuarioAdminList: any [] = [];

  constructor(private prestadorServicoSrv: PrestadorServicoService, 
    private tipoServicoSrv: TipoServicoService, 
    private UsuarioSrv: UsuarioService
  ) {
    
  }

  ngOnInit(): void {
    this.getPrestadorServico();
    this.getTipoServico();
    this.getUsuario();
  }

  //getPrestadorServico() {
  //  this.prestadorServicoSrv.getPrestadorServico(1, 5).subscribe((res:any)=>{
  //    this.prestadorServicoList = res.elementos;
  //  })
  //}

  getPrestadorServico() {
    this.prestadorServicoSrv.getPrestadorServico().subscribe((res:any)=>{
      this.prestadorServicoList = res.elementos;
    })
  }

  getTipoServico() {
    this.tipoServicoSrv.getTipoServico().subscribe((res:any)=>{
      this.tipoServicoList = res.elementos;
    })
  }

  getUsuario() {
    this.UsuarioSrv.getUsuarioAdmin().subscribe((res:any)=>{
      this.usuarioAdminList = res;
    })
  }

  onSave(item: any) {
    this.prestadorServicoSrv.savePrestadorServico(item).subscribe((res:any)=>{
      if(res.resul) {
        alert("Prestador de Serviço Cadastrado!");
        this.getPrestadorServico();
        this.closeSideBar();
      } else {
        alert(res.message);
      }
    })
  }

  onEditing(item: any) {
    this.prestadorServicoObj = { ...item};
    this.titleSideBar = "Editando "+item.nome;
    this.editing = true;
    this.openSideBar();
  }

  updateEspecialidade() {
    const especialidadeSelecionada = this.tipoServicoList.find(item => item.idEspecialidade == this.prestadorServicoObj.idEspecialidade);
    if (especialidadeSelecionada) {
        this.prestadorServicoObj.nomeEspecialidade = especialidadeSelecionada.nomeEspecialidade;
        this.prestadorServicoObj.idEspecialidade = especialidadeSelecionada.idEspecialidade;
    }
  }

  updateUsuarioAdmin() {
    const usuarioSelecionada = this.usuarioAdminList.find(item => item.idUsuario == this.prestadorServicoObj.idUsuario);
    if (usuarioSelecionada) {
        this.prestadorServicoObj.idUsuario = usuarioSelecionada.idUsuario;
    }
  }

  onEdit(item: any) {
    this.prestadorServicoSrv.putPrestadorServico(item, item.idPrestadorServico).subscribe((res:any)=>{
      if(res.resul) {
        alert("Prestador de Serviço Editado!");
        this.getPrestadorServico();
        this.closeSideBar();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(item: any) {
    this.prestadorServicoSrv.deletePrestadorServico(item).subscribe((res:any)=>{
      if(res.resul) {
        alert("Prestador de Serviço Apagado!");
        this.getPrestadorServico();
      } else {
        alert(res.message);
      }
    })
  }

  onCreate() {
    this.titleSideBar = "Criando Novo Prestador de Serviço";

    this.prestadorServicoObj.nomeEspecialidade = "";
    this.prestadorServicoObj.valor = 0;
    this.prestadorServicoObj.crm = "";
    this.prestadorServicoObj.idEspecialidade = 0;
    this.prestadorServicoObj.idUsuario = 0;
    this.prestadorServicoObj.valor = 0;
    this.prestadorServicoObj.nomeEspecilidade = "";
    this.prestadorServicoObj.cpf = "";
    this.prestadorServicoObj.email = "";
    this.prestadorServicoObj.nome = "";
    this.prestadorServicoObj.nomeCargo = "";
    this.prestadorServicoObj.contatos = "";
    this.prestadorServicoObj.cep = "";
    this.prestadorServicoObj.numero = 0;
    
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
