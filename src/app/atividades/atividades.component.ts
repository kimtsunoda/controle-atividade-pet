import { AtividadesService } from './atividades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Atividade } from '../models/ativdade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css'],
  providers: [AtividadesService]
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
    this.atividadesService.salvar(this.atividade)
    .then(() => {
      console.log('Atividade cadastrada com sucesso');
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      console.log('A operação foi finalizada');
    });

  }


}
