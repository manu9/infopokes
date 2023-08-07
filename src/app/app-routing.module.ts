import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPokemonComponent } from './components/crear-pokemon/crear-pokemon.component';
import { MostrarPokemonComponent } from './components/mostrar-pokemon/mostrar-pokemon.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearPokemonComponent
  },
  {
    path: 'mostrar',
    component: MostrarPokemonComponent
  },
  {
    path: '**',
    redirectTo: 'mostrar'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
