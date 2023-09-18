import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit, AfterViewInit {
  value: string = "";

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.value = "SIM"
  }
}
