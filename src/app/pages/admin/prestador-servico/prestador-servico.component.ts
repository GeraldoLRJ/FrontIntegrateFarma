import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrestadorServicoService } from '../../../services/prestador-servico/prestador-servico.service';

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
    "id_tipo_servico": 1,
    "ds_servico": "",
    "dt_cadastro": "2025-01-25",
    "dt_modificacao": "2025-01-27",
    "dt_desativacao": null
  }

  prestadorServicoList: any [] = [];

  constructor(private prestadorServicoSrv: PrestadorServicoService) {
    
  }

  ngOnInit(): void {
    this.getTipoServico();
  }

  getTipoServico() {
    this.prestadorServicoSrv.getPrestadorServico().subscribe((res:any)=>{
      this.prestadorServicoList = res;
    })
  }

  onSave() {
    this.prestadorServicoSrv.savePrestadorServico(this.prestadorServicoObj).subscribe((res:any)=>{
      if(res.resul) {
        alert("Prestador de Serviço Cadastrado!");
        this.getTipoServico();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(item: any) {
    this.prestadorServicoObj = item;
    this.openSideBar();
  }

  openSideBar() {
    this.showSideBar = true;
  }

  closeSideBar() {
    this.showSideBar = false;
  }
}
