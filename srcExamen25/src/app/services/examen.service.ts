import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters, Welcome, Episodes, Dictionary } from '../models/interface';  

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(public http: HttpClient) { }

  urlPoke = 'https://pokeapi.co/api/v2/pokemon/';
  urlRick = 'https://rickandmortyapi.com/api/character';
  urlEpisodes = 'https://rickandmortyapi.com/api/episode';
  urlDictionary = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  

  public getPokemon(name: string): Observable<Welcome> {
    return this.http.get<Welcome>(`${this.urlPoke}${name}`);
  }

  public getCharacters(page: number): Observable<Characters> {
    
    this.urlRick = `https://rickandmortyapi.com/api/character?page=${page}`;
    return this.http.get<Characters>(`${this.urlRick}`);
  }

  public getEpisodes(page: number): Observable<Episodes> {
    
    this.urlEpisodes = `https://rickandmortyapi.com/api/episode?page=${page}`;
    return this.http.get<Episodes>(`${this.urlEpisodes}`);
  }

  public getWord(word: string): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(`${this.urlDictionary}${word}`);
  }
}
