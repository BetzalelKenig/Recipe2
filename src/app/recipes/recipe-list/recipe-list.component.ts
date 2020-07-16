import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg'),
    new Recipe('Test Recipe 2', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
