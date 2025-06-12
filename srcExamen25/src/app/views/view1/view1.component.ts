import { Component } from '@angular/core';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { Welcome } from '../../models/interface';
import { PhotosComponent } from "../../components/photos/photos.component";

@Component({
  selector: 'app-view1',
  imports: [PokemonComponent, PhotosComponent],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component {

  selectedPokemon: Welcome | null = null;

  onPokemonSelect(pokemon: Welcome): void {
  this.selectedPokemon = pokemon;
  }

  onBack(): void {
    this.selectedPokemon = null;

  }
}
