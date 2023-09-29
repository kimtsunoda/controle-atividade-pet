import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../models/pet';
import { WebStorageUtil } from '../util/web.storage.util';
import { Constants } from '../util/constant';

@Component({
  selector: 'app-pets-detalhes',
  templateUrl: './pets-detalhes.component.html',
  styleUrls: ['./pets-detalhes.component.css']
})
export class PetsDetalhesComponent implements OnInit{
  pet: Pet | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('petId'));
    let pets = WebStorageUtil.get(Constants.PETS_KEY) as Pet[];
    this.pet = pets.find((p) => {
      return p.id === productIdFromRoute;
    });
    
  }

}
