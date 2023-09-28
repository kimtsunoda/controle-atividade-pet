import { AtividadesService } from './atividades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Atividade } from '../models/ativdade';
import { NgForm } from '@angular/forms';
import { WebStorageUtil } from '../util/web.storage.util';

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

  ngOnInit() {
    WebStorageUtil.initializeAtividadesWebStorage();
    this.atividade = new Atividade('', '');
    this.atividades = this.atividadesService.listar();
  }

  async onSubmit() {
    try {
      await this.atividadesService.salvar(this.atividade);
      this.form.reset();
      this.atividade = new Atividade('', '');
      this.atividades = this.atividadesService.listar();
      console.log('Atividade cadastrada com sucesso');
    } catch (e) {
      console.log(e);
    } finally {
      console.log('A operação foi finalizada');
    }
  }

  async deletar(id: string) {
    try {
      await this.atividadesService.deletar(id);
      this.atividades = this.atividadesService.listar();
      console.log('Atividade cadastrada com sucesso');
    } catch (e) {
      console.log(e);
    } finally {
      console.log('A operação foi finalizada');
    }
  }

}
