import { Resultado } from 'src/app/model/PokeApi';
import { PokeApiService } from './../../services/pokeapi.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.css']
})
export class MostrarPokemonComponent implements OnInit{

  listaPokemon:Resultado[] = [];

  constructor ( private pokeApiService: PokeApiService){}

  @ViewChild('txtInput')
  public tagInput !: ElementRef<HTMLInputElement>

  @ViewChild('txtError')
  public tagTxtError !: ElementRef<HTMLInputElement>

  ngOnInit(): void {
    this.cargarPokemones();
  }

  async cargarPokemones(){
    this.listaPokemon = [...this.listaPokemon, ...await this.pokeApiService.getPokemones()];
  }


  async buscarPokemon(){
    let name = this.tagInput.nativeElement.value.toLowerCase();
    let errorMsg = '';
    this.tagInput.nativeElement.value = '';

    if(!this.pokeApiService.nameExist(name)){
      errorMsg = `Error: Nombre de pokemon ${name} no existe`;
      this.tagTxtError.nativeElement.innerHTML = errorMsg;
      return
    }
    this.tagTxtError.nativeElement.innerHTML = errorMsg;

    this.listaPokemon = [];

    const resp = await this.pokeApiService.getByName(name);

    const pokemon:Resultado = {
      name : resp.name,
      url : '',
      id: resp.id
    }

    this.listaPokemon.push(pokemon);
  }

  resetSearch(){
    this.listaPokemon = [];
    this.tagTxtError.nativeElement.innerHTML = '';
    this.cargarPokemones();
  }
}
