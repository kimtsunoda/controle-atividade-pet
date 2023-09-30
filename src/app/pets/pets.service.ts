import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { WebStorageUtil } from '../util/web.storage.util';
import { Constants } from '../util/constant';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PetsService {
  private pets: BehaviorSubject<Pet[]>;

  constructor() {
    this.pets = new BehaviorSubject<Pet[]>(
      WebStorageUtil.get(Constants.PETS_KEY)
    );
  }

  salvar(pet: Pet) {
    const newPets = this.pets.value.concat([Pet.toObject(pet)]);
    this.pets.next(newPets);
    WebStorageUtil.set(Constants.PETS_KEY, newPets);
  }

  atualizar(pet: Pet) {
    this.deletar(pet.id);
    this.salvar(pet);
  }

  deletar(id: string): boolean {
    const newPets = (WebStorageUtil.get(Constants.PETS_KEY) as Pet[]).filter(
      (p) => {
        return p.id?.valueOf() != id?.valueOf();
      }
    );
    WebStorageUtil.set(Constants.PETS_KEY, newPets);
    this.pets.next(newPets);
    return true;
  }

  exite(id: string): boolean {
    const pets = WebStorageUtil.get(Constants.PETS_KEY);
    for (let p of pets) {
      if (p.id?.valueOf() == id?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  asObservable(): Observable<Pet[]> {
    return this.pets;
  }

}
