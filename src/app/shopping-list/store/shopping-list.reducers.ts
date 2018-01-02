import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'; // we import everything exported from shopping-list actions
import { Action } from '@ngrx/store';

export interface AppState {
  shoppingList: State;
} // our app state is our entire architecture we have a shopping list area which is equivalent to our state in the app.

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
} // We set up an interface for state. This allows us to ad typing in other areas of our app

const initialState: State = {
  ingredients: [
    new Ingredient('Carrot', 3),
    new Ingredient('Pumpkin', 1),
    new Ingredient('Squash', 2),
    new Ingredient('Cucumber', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
} // no state exists at the beginning so an initial state needs to be declared

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, // to create the new state we spread the old state to create a new object
        ingredients: [...state.ingredients, action.payload]
        // we then overwrite the ingredients with the spread previous ingredients and the new ingredient
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        editedIngredient: null,
        ...action.payload
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};
      console.log(action.payload);
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload
      }; // this lets a component know that an 'editing' event has begun
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      }
    default:
      return state; // we need to return the new state of our application
  }
} // a reducer function will be triggered whenever an action is dispatched.
// it takes state which is the current state of the application
