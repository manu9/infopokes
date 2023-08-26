import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPokemonComponent } from './components/crear-pokemon/crear-pokemon.component';
import { MostrarPokemonComponent } from './components/mostrar-pokemon/mostrar-pokemon.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearPokemonComponent
  },
  {
    path: 'detalle/:id',
    component: DetallePokemonComponent
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
