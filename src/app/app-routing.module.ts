import { LandPageComponent } from './land-page/land-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { AtividadesComponent } from './atividades/atividades.component';

const routes: Routes = [ { path: 'inicio', component: LandPageComponent },
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'pets', component: PetsComponent},
{ path: 'atividades', component: AtividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
