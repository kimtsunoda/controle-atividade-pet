import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../models/pet';
import { PetsService } from './pets.service';
import { WebStorageUtil } from '../util/web.storage.util';
import { PainelComponent } from '../painel/painel.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  providers: []
})
export class PetsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  pet!: Pet;
  pets?: Pet[];

  subscription: Subscription;

  constructor(private petsService: PetsService) {
    this.subscription = this.petsService.asObservable().subscribe((data) => {
      this.pets = data;
    });
  }

  ngOnInit(): void {
    WebStorageUtil.initializePetsWebStorage();
    this.pet = new Pet('', '', '');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if(this.petsService.exite(this.pet.id)) {
      this.petsService.atualizar(this.pet)
    }else{
      this.petsService.salvar(this.pet);
    }
 
    this.form.reset();
    this.pet = new Pet('', '', '');
  }

  editar(pet: Pet) {
    let copia = Pet.copiar(pet);
    this.pet = copia;
  }

  deletar(id: string) {
    this.petsService.deletar(id);
  }

}