import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../models/pet';
import { PetsService } from './pets.service';


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

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
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
  }

  deletar(nome: string) {
    this.petService.deletar(nome);
    this.pets = this.petService.listar();
  }

}