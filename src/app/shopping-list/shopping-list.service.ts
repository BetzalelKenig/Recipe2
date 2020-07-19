import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // because getIngredients return only copy
  ingredientsChange = new Subject<Ingredient[]>();

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
  this.ingredientsChange.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChange.next(this.ingredients.slice());
}

}
