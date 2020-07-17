import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // because getIngredients return only copy
  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sugar', 2),
    new Ingredient('Chocolate', 2),
  ];

constructor() { }

getIngredients(){
  return this.ingredients.slice();
}

addIngredinet(ingredient: Ingredient) {
  this.ingredients.push(ingredient);
  this.ingredientsChange.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChange.emit(this.ingredients.slice());
}

}
