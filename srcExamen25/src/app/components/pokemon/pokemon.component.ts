import { Component } from '@angular/core';
import { ExamenService } from '../../services/examen.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { Welcome } from '../../models/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons: string[] = [
    'pikachu', 'bulbasaur', 'charmander']

  pokemonsArray: Welcome[] = [];

  @Input() pokemon!: Welcome | null;
  @Output() select = new EventEmitter<Welcome>();

  public constructor(public examenService: ExamenService) { }

  public getPokemon(name: string): void {
    this.examenService.getPokemon(name).subscribe((data: Welcome) => {
      this.pokemonsArray.push(data);
    });
  }

  onClick(pokemon: Welcome): void {
    this.select.emit(pokemon);
  }

  public ngOnInit(): void {
    for (let i = 0; i < this.pokemons.length; i++) {
      this.getPokemon(this.pokemons[i]);
    } 
  }

  
}
