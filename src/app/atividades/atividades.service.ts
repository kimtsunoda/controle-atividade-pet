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
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY);
    this.atividadeSource = new BehaviorSubject<number>(this.atividades.length);
  }

  salvar(atividade: Atividade): Promise<Atividade> {
    return new Promise<Atividade>((resolve, reject) => {
      setTimeout(() => {
        this.atividades.push(atividade);
        WebStorageUtil.set(Constants.ATIVIDADES_KEY, this.atividades);
        resolve(atividade);
      }, 1000);
    });
  }

  deletar(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY);
        this.atividades = this.atividades.filter((a) => {
          a.id?.valueOf() != id?.valueOf();
        });
        WebStorageUtil.set(Constants.ATIVIDADES_KEY, this.atividades);
        resolve(id);
      }, 1000);
    });
  }

  listar(): Atividade[] {
    this.atividades = WebStorageUtil.get(Constants.ATIVIDADES_KEY);
    return this.atividades;
  }

  notifyTotalAtividades() {
    this.atividadeSource.next(this.listar()?.length);
  }

  asObservable(): Observable<number> {
    return this.atividadeSource;
  }
  
}