import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web.storage.util';
import { Constants } from '../util/constant';
import { Atividade } from '../models/ativdade';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AtividadesService {
  atividades!: Atividade[];
  private atividadeSource!: BehaviorSubject<number>;

  constructor() {
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY)  || [] ;
    this.atividadeSource = new BehaviorSubject<number>(this.atividades.length);
  }


  salvar(atividade: Atividade): Promise<Atividade>{
    const p = new Promise<Atividade>((resolve, reject) => {
      if (atividade.descricaoAtividade.length < 2) {
        reject('Descrição muito curta.');
      } 
      setTimeout(() => {
        this.atividades.push(atividade);
        WebStorageUtil.set(Constants.ATIVIDADES_KEY, this.atividades);
        resolve(atividade);
      }, 10000);
    })
      return p
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

  notifyTotalUsers() {
    this.atividadeSource.next(this.listar()?.length);
  }

  asObservable(): Observable<number> {
    return this.atividadeSource;
  }

}