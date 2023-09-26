export class Atividade {

  nomePet: string;
    descricaoAtividade: string;
    data: Date;

    constructor(nomePet: string, descricaoAtividade: string) {
      this.nomePet = nomePet;
      this.descricaoAtividade = descricaoAtividade;
      this.data = new Date();
    }

}