import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web.storage.util';
import { Constants } from '../util/constant';
import { Atividade } from '../models/ativdade';

@Injectable({providedIn: 'root'})
export class AtividadesService {
  atividades!: Atividade[];

  constructor() {
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY) || [];
  }


  salvar(atividade: Atividade) {
    this.atividades.push(atividade);
    WebStorageUtil.set(Constants.ATIVIDADES_KEY, this.atividades);
  }

  atualizar(atividade: Atividade) {
    this.deletar(atividade.nomePet);
    this.salvar(atividade);
  }

  deletar(nome: string): boolean {
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY);
    this.atividades = this.atividades.filter((a) => {
      return a.nomePet?.valueOf() != nome?.valueOf();
    });

    WebStorageUtil.set(Constants.ATIVIDADES_KEY, this.atividades);
    return true;
  }

  listar(): Atividade[] {
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY);
    return this.atividades;
  }

}