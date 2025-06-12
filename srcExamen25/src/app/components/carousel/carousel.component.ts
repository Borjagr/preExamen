import { Component } from '@angular/core';
import { ExamenService } from '../../services/examen.service';
import { Characters, Result, Episodes } from '../../models/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  charactersTotal: Characters | null = null;
  characterResults: Result[] = [];
  currentIndex: number = 0;

  episodesTotal: Episodes | null = null;
  episodeResults: Result[] = [];
  showEpisodes: boolean = false;
  

  public constructor(public examenService: ExamenService) { }

  public getCharacters(): void {
    this.showEpisodes = false;
    this.examenService.getCharacters(this.currentPage).subscribe((data: Characters) => {
      this.charactersTotal = data;
      this.characterResults = data.results;
      this.totalPages = data.info.pages;
      console.log(this.currentPage  + 'fngetcharacters');
  })
  }

  public getEpisodes(): void {
    this.showEpisodes = true;
    this.examenService.getEpisodes(this.currentPage).subscribe((data: Episodes) => {
      console.log(data);
      this.episodesTotal = data;
      this.episodeResults = data.results;
      this.totalPages = data.info.pages;
    });
  }

  currentPage: number = 1;
  totalPages: number = 0;

  nextItem(): void {
    if (this.currentIndex > (this.showEpisodes ? this.episodeResults.length - 2 : this.characterResults.length - 2)) {
      this.currentIndex = 0; 
    } else {
   this.currentIndex++;
  }
}

  previusItem(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.showEpisodes ? this.episodeResults.length - 1 : this.characterResults.length - 1; 
    } else {
   this.currentIndex--;
  }
  }

  previusPage(): void { 
  if  (this.currentPage === 1) {
    this.currentPage = this.totalPages; 
  } else  {
    this.currentPage--;
  }
  console.log('Current page: fnpreviouspage', this.currentPage);
  if (this.showEpisodes) {
    this.getEpisodes();
  } else {
    this.getCharacters();
  }
}

nextPage(): void {
  if (this.currentPage >= this.totalPages) {
    this.currentPage = 1; 
  } else {
    this.currentPage++;
  }
  console.log('Current page: fnnextpage', this.currentPage);
  if (this.showEpisodes) {
    this.getEpisodes();
  } else {
    this.getCharacters();
  }
}

  ngOnInit(): void {
    this.getCharacters();
  }
}
