import { Component, OnChanges, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AtividadesService } from '../atividades.service';

@Component({
  selector: 'app-total-atividades',
  templateUrl: './total-atividades.component.html',
  styleUrls: ['./total-atividades.component.css'],
})
export class TotalAtividadesComponent implements OnInit {
  value: number = 0;
  subscription: Subscription;

  constructor(private atividadesService: AtividadesService) {
    this.subscription = this.atividadesService.asObservable().subscribe(
      (data) => {
        this.value = data;
      }
    );
  }

  ngOnInit(): void {
    this.value = this.atividadesService.listar()?.length;
  }
}