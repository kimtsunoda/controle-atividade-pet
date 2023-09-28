import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { WebStorageUtil } from '../util/web.storage.util';
import { Constants } from '../util/constant';

@Injectable({providedIn: 'root'})
export class PetsService {
  pets: Pet[];

  constructor() {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
  }

  salvar(pet: Pet) {
    this.pets.push(pet);
    WebStorageUtil.set(Constants.PETS_KEY, this.pets);
  }

  atualizar(pet: Pet) {
    this.deletar(pet.id);
    this.salvar(pet);
  }

  deletar(id: string): boolean {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    this.pets = this.pets.filter((p) => {
      return p.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(Constants.PETS_KEY, this.pets);
    return true;
  }

  listar(): Pet[] {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    return this.pets;
  }

}
