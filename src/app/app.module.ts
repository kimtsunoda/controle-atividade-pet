import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { PetsComponent } from './pets/pets.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { FormsModule } from '@angular/forms';
import { TotalAtividadesComponent } from './atividades/total-atividades/total-atividades.component';
import { PetsDetalhesComponent } from './pets-detalhes/pets-detalhes.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    PetsComponent,
    AtividadesComponent,
    TotalAtividadesComponent,
    PetsDetalhesComponent,
    PainelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
