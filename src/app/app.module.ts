import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CrearPokemonComponent } from './components/crear-pokemon/crear-pokemon.component';
import { MostrarPokemonComponent } from './components/mostrar-pokemon/mostrar-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CrearPokemonComponent,
    MostrarPokemonComponent,
    CardPokemonComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
