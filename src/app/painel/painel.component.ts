import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnChanges {
  @Input() value: string = "";

  constructor() {}

  ngOnChanges(): void {
  
  }

  ngOnInit(): void {}
  
}