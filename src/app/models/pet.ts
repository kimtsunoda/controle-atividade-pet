export class Pet {
   
    nome: string;
    tipo: string;
    raca: string;

    constructor(nome: string, tipo: string, raca: string) {
      this.nome = nome;
      this.tipo = tipo;
      this.raca = raca;
    }

    public static copiar(pet: Pet) {
      let p: Pet = new Pet(pet.nome, pet.tipo, pet.raca);
      p.nome = pet.nome;
      p.tipo = pet.tipo;
      p.raca = pet.tipo;
      return p;
    }

}