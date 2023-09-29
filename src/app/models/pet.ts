import { v4 as uuid } from 'uuid'

export class Pet {
    id: string;
    nome: string;
    tipo: string;
    raca: string;
    dataNascimento?: Date;

    constructor(nome: string, tipo: string, raca: string) {
      this.id = uuid();
      this.nome = nome;
      this.tipo = tipo;
      this.raca = raca;
    }

    public static copiar(pet: Pet) {
      let p: Pet = new Pet(pet.nome, pet.tipo, pet.raca);
      p.id = pet.id
      p.nome = pet.nome;
      p.tipo = pet.tipo;
      p.raca = pet.raca;
      p.dataNascimento = pet.dataNascimento;
      return p;
    }

}