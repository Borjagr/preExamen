import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Welcome } from '../../models/interface';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  @Output() back = new EventEmitter<void>();
  @Input() selectedPokemon: Welcome | null = null;

  arraySprites: string[] = [];
  photoGrande: string | null = null;

  getSprites(): string[] {
    if (this.selectedPokemon && this.selectedPokemon.sprites) {
      this.arraySprites = [];
      this.arraySprites.push(this.selectedPokemon.sprites.front_default);
      this.arraySprites.push(this.selectedPokemon.sprites.back_default);
      this.arraySprites.push(this.selectedPokemon.sprites.front_shiny);
      this.arraySprites.push(this.selectedPokemon.sprites.back_shiny);
      console.log('Sprites array:', this.arraySprites);
      return this.arraySprites;
    }
    console.log('No sprites available for the selected Pokemon');
    return [];
  }

  onImagenClick(sprite: string): void {
    this.photoGrande = this.photoGrande === sprite ? null : sprite;
  }

  onBackClick(): void {
    this.back.emit();
    console.log('Back button clicked');
  }
}
