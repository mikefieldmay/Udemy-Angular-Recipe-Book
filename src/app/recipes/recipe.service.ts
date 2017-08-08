import {EventEmitter} from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Fish and Chips',
                'Super tasty supper',
                'http://www.bizzielizzies.co.uk/wp-content/uploads/2015/03/slide-fish-chips-2015.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
      return this.recipes.slice(); // returns a new array which is an exact copy
  }

}