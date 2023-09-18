import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  providers: []
})
export class PetsComponent implements OnInit, AfterViewInit {
  value: string = "";

  constructor() {}

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.value = "SIM"
  }

}
