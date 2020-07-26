import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import * as ShoppinListActions from '../shopping-list/store/shopping-list.actions';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe 1',
  //     'french crepe',
  //     'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg',
  //     [new Ingredient('ingredient', 76)]
  //   ),
  //   new Recipe(
  //     'Test Recipe 2',
  //     'french crepe',
  //     'https://p0.pikist.com/photos/832/1006/pancake-crepes-eat-food-crepe-thumbnail.jpg',
  //     [new Ingredient('ingredient', 6), new Ingredient('ingredient', 6)]
  //   ),
  // ];

  constructor(
    private slService: ShoppingListService,
    private store: Store<{ shoppinList: { ingredients: Ingredient[] } }>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppinListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
