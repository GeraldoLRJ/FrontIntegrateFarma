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
    "id_tipo_servico": 1,
    "ds_servico": "",
    "dt_cadastro": "2025-01-25",
    "dt_modificacao": "2025-01-27",
    "dt_desativacao": null
  }

  tipoServicoList: any [] = [];

  constructor(private tipoServicoSrv: TipoServicoService) {
    
  }

  ngOnInit(): void {
    this.getTipoServico();
  }

  getTipoServico() {
    this.tipoServicoSrv.getTipoServico().subscribe((res:any)=>{
      this.tipoServicoList = res;
    })
  }

  onSave() {
    this.tipoServicoSrv.saveProduct(this.tipoServicoObj).subscribe((res:any)=>{
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
    this.openSideBar();
  }

  openSideBar() {
    this.showSideBar = true;
  }

  closeSideBar() {
    this.showSideBar = false;
  }
}
