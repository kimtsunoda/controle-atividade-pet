import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../models/pet';
import { PetsService } from './pets.service';
import { PainelComponent } from '../painel/painel.component';
import { WebStorageUtil } from '../util/web.storage.util';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  providers: []
})
export class PetsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  @ViewChild(PainelComponent)
  painelComponent!: PainelComponent;

  pet!: Pet;
  pets?: Pet[];

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    WebStorageUtil.initializePetsWebStorage()
    this.pet = new Pet('', '', "");
    this.pets = this.petService.listar();
  }

  onSubmit() {
    this.petService.salvar(this.pet);
    this.form.reset();
    this.pet = new Pet('', '',"");
    this.pets = this.petService.listar();

  }

  editar(pet: Pet) {
    let copia = Pet.copiar(pet);
    this.pet = copia;
    this.petService.atualizar(pet);
  }

  deletar(id: string) {
    this.petService.deletar(id);
    this.pets = this.petService.listar();
  }

  onPetEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Eiiii...';
    this.modal.text = `As vacinas do seu Amiguinho estão em dia?`;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}