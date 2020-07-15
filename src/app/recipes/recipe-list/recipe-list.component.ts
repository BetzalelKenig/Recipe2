import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg'),
    new Recipe('Test Recipe', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
