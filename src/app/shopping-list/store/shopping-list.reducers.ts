import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'; // we import everything exported from shopping-list actions
import { Action } from '@ngrx/store';

const initialState = {
  ingredients: [
    new Ingredient('Carrot', 3),
    new Ingredient('Pumpkin', 1),
    new Ingredient('Squash', 2),
    new Ingredient('Cucumber', 10)
  ]
} // no state exists at the beginning so an initial state needs to be declared

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
    return {
      ...state, // to create the new state we spread the old state to create a new object
      ingredients: [...state.ingredients, action.payload] // we then overwrite the ingredients with the spread previous ingredients and the new ingredient
    }
    default:
      return state //we need to return the new state of our application
  }
} // a reducer function will be triggered whenever an action is dispatched.
// it takes state which is the current state of the application
