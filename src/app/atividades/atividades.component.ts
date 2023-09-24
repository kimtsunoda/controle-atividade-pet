import { AtividadesService } from './atividades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Atividade } from '../models/ativdade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  
  atividade!: Atividade;
  atividades?: Atividade[];

  constructor(private atividadesService: AtividadesService) {}

  ngOnInit(): void {
    this.atividade = new Atividade('', '');
    this.atividades = this.atividadesService.listar();
    
  }

  onSubmit() {
    this.atividadesService.salvar(this.atividade);

  }

  editar(atividade: Atividade) {
    let copia = Atividade.copiar(atividade);
    this.atividade = copia;
  }

  deletar(nome: string) {
    this.atividadesService.deletar(nome);
    this.atividades = this.atividadesService.listar();
  }

}
