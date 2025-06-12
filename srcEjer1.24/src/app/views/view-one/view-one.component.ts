import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenService } from '../../services/examen.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-one',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {
  public constructor(public examenService: ExamenService) { }
  reactiveForm = new FormGroup({
    name: new FormControl(''),
  });

  characters: any[] = [];
  name: string = '';
  public showForm: boolean = true;
  currentPage: number = 1;
  totalPages: number = 1;
  lastSearchedName: string = '';

  public onSubmit(): void {
    const name = this.reactiveForm.get('name')?.value || '';
    this.lastSearchedName = name;
    this.currentPage = 1;
    this.getCharactersByPage(name, this.currentPage);
    this.showForm = false;
  }

  getCharactersByPage(name: string, page: number): void {
    this.examenService.getCharactersByNameAndPage(name, page).subscribe({
      next: (data: { results: any[]; info: { pages: number; }; }) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
      },
      error: (error: any) => {
        this.characters = [];
        this.totalPages = 1;
      }
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    } else {
      this.currentPage = this.totalPages;
    }
    this.getCharactersByPage(this.lastSearchedName, this.currentPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    this.getCharactersByPage(this.lastSearchedName, this.currentPage);
  }
}
