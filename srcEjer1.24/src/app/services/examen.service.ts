import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/examen.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  urlRick= 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) { }

  getCharactersByNameAndPage(name: string, page: number): Observable<Character> {
    return this.http.get<Character>(`${this.urlRick}/?name=${name}&page=${page}`);
  }
  
}
