export class Atividade {
   
    nomePet: string;
    descricaoAtividade: string;
    data: Date;

    constructor(nomePet: string, descricaoAtividade: string) {
      this.nomePet = nomePet;
      this.descricaoAtividade = descricaoAtividade;
      this.data = new Date();
    }

    public static copiar(atividade: Atividade) {
      let a: Atividade = new Atividade(atividade.nomePet, atividade.descricaoAtividade);
      a.nomePet = atividade.nomePet;
      a.descricaoAtividade = atividade.descricaoAtividade;
      a.data = atividade.data;
      return a;
    }

}