import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ExamenService } from '../../services/examen.service';
import { Dictionary } from '../../models/interface';


@Component({
  selector: 'app-text',
  imports: [ReactiveFormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  reactiveForm: FormGroup = new FormGroup({
    word: new FormControl('')
  });

  busqueda: boolean = false;
  resultados: boolean = false;

  response: any | null = null;
  arrayResultados: string[] = [];

  public constructor(public service: ExamenService) { }


  onSubmit(): void {
    console.log('Form submitted with name:', this.reactiveForm.value);

    this.service.getWord(this.reactiveForm.value.word).subscribe((data) => {
      this.busqueda = true;
      this.response = data;
      
    });
  }

  getDefinitions(): void {
    if (this.response) {
      console.log(this.response, 'meanings');
      this.arrayResultados = [];
      this.response[0].meanings.forEach((meaning: any) => {
        meaning.definitions.forEach((definition: any) => {
          this.arrayResultados.push(definition.definition);
        });
      });

    }
        this.resultados = true;
  }

  getSynonyms(): void {
    if (this.response) {
      this.arrayResultados = [];
      this.response[0].meanings.forEach((meaning: any) => {
        meaning.synonyms.forEach((synonym: any) => {
          this.arrayResultados.push(synonym);
        });
      });
    }
    this.resultados = true;
  }

  getAntonyms(): void {
    if (this.response) {
      this.arrayResultados = [];
      this.response[0].meanings.forEach((meaning: any) => {
        meaning.antonyms.forEach((antonym: any) => {
          this.arrayResultados.push(antonym);
        });
      });
    }
    this.resultados = true;
  }

  onBack(): void {
    this.resultados = false;
  }

  onNewSearch(): void {
    this.busqueda = false;
    this.resultados = false;
    this.reactiveForm.reset();
  }
}