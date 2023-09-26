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
import { ModalComponent } from './modal/modal.component';
import { PainelComponent } from './painel/painel.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    PetsComponent,
    PainelComponent,
    AtividadesComponent,
    TotalAtividadesComponent,
    ModalComponent
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
