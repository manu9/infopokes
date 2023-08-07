import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomPokemon } from '../model/customPokemon';
import { Observable, of, map, catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<CustomPokemon[]>{
    return this.http.get<CustomPokemon[]>('http://localhost:3000/pokemon');
  }

  createPokemon( pokemon: CustomPokemon ): Observable<CustomPokemon> {
    return this.http.post<CustomPokemon>('http://localhost:3000/pokemon', pokemon);
  }

  /* Patch es solo cuando quiero actualizar parte del registro */
  updatePokemon( pokemon: CustomPokemon ): Observable<CustomPokemon> {
    if( !pokemon.name) throw Error( 'Name is required.' );
    return this.http.patch<CustomPokemon>('http://localhost:3000/pokemon', pokemon);
  }

  deletePokemon( id: string ): Observable<boolean> {
    return this.http.delete(`http://localhost:3000/pokemon/${id}`)
    .pipe(
      map( resp => true ),
      catchError( err => of(false))
    );
  }
}
