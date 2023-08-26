import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/model/PokeApi';
import { PokeApiService } from '../../services/pokeapi.service';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnChanges{

  constructor(private pokeApiService:PokeApiService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion();
  }

  @Input() data?:Resultado;

  id:string = '0';

  extraerInformacion(){
    if(this.data){
      this.id = this.data.url.substring(34, this.data.url.length-1);
    }

    if(this.data?.url == ''){
      this.id = this.data.id;
    }

    this.pokeApiService.getByID(this.id);
  }
}
