import {Ingredient} from '../../shared/ingredient.model';
import { Action } from "@ngrx/store";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; // When we create an action (that implements action) and it needs a readonly type

  constructor(public payload: Ingredient) {}
}

export type ShoppingListActions = AddIngredient; // typescript has a property to export type
