import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cache1.24chasa.bg/Images/cache/264/Image_6035264_128_0.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cache1.24chasa.bg/Images/cache/264/Image_6035264_128_0.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
