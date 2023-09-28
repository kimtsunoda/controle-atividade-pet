import { v4 as uuid } from 'uuid'

export class Atividade {
    id: string
    nomePet: string;
    descricaoAtividade: string;
    data: Date;

    constructor(nomePet: string, descricaoAtividade: string) {
      this.id = uuid();
      this.nomePet = nomePet;
      this.descricaoAtividade = descricaoAtividade;
      this.data = new Date();
    }

}