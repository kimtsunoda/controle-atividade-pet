import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { PetsService } from '../pets/pets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value: number = 0;
  subscription: Subscription;

  constructor(private petsService: PetsService) {
    this.subscription = this.petsService.asObservable().subscribe((data) => {
      this.value = data.length;
    });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}