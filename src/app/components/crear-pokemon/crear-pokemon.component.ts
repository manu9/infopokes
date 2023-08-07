import { Component, OnInit } from '@angular/core';
import { CustomPokemon } from 'src/app/model/customPokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.css']
})

export class CrearPokemonComponent implements OnInit{

  public customPokemon: CustomPokemon[] = [];

  public selectedPokemon: CustomPokemon = new CustomPokemon();

  constructor( private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemon()
    .subscribe( pokemon => {
      this.customPokemon = pokemon;
    });
  }

  public guardarPokemon():void{
    this.selectedPokemon.id = uuid();
    this.pokemonService.createPokemon( this.selectedPokemon )
    .subscribe( pokemon => {
      //location.reload();
      this.customPokemon.push(this.selectedPokemon);
      this.selectedPokemon = new CustomPokemon();
    });
    return;
  }

  public editarPokemon( customPokemon: CustomPokemon): void{
    this.selectedPokemon = customPokemon;
    let index = this.customPokemon.indexOf(customPokemon);
    if( index > -1){
      this.customPokemon.splice(index,1);
      this.removerPokemon(customPokemon);
    }
  }

  public removerPokemon( customPokemon: CustomPokemon): void{
    this.pokemonService.deletePokemon(customPokemon.id)
    .subscribe( pokemon => {
      let index = this.customPokemon.indexOf(customPokemon);
      if( index > -1){
        this.customPokemon.splice(index,1);
      }
    });
  }
}
