import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [new Ingredient('Sugar', 2), new Ingredient('Chocolate', 2)],
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
  }
}
