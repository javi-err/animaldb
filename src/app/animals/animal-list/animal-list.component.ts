import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Animal[] = [
    new Animal('Panthera leo', [], 'Panthera', 'Pantherinae', 'Felidae', 'Feliformia', 'Carnivora', 'Mammalia', 'Chordata', 'Lion', 'Vulnerable', ['https://unsplash.com/photos/IPRFX7CVVoU'], 'Cheeks')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
