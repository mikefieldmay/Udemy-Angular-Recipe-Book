import {Injectable, EventEmitter} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Fish and Chips',
                'Super tasty supper',
                'http://www.bizzielizzies.co.uk/wp-content/uploads/2015/03/slide-fish-chips-2015.jpg',
                [
                  new Ingredient('Fish', 1),
                  new Ingredient('Chips', 20)
                ])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService ) {
  }

  getRecipes() {
      return this.recipes.slice(); // returns a new array which is an exact copy
  }

addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
}

}
