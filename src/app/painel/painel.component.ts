import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnChanges {
  @Input() value: number = 0;
  @Output() petEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.value > 0)
      setTimeout(() => {
        this.petEvent.emit(true);
      }, 5000);
  }

}