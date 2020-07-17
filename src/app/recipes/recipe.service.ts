import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg', [
      new Ingredient('ingredient', 76)]),
    new Recipe('Test Recipe 2', 'french crepe', 'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg', [
      new Ingredient('ingredient', 6),
      new Ingredient('ingredient', 6),
    ]),
  ];

constructor(private slService: ShoppingListService) { }

getRecipes() {
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
}
}
