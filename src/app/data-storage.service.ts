import {Recipe} from './recipes/recipe.model';
import {RecipeService} from './recipes/recipe.service';
import {Response, Http} from '@angular/http';
import 'rxjs/Rx';
import { config } from './config';

import { Injectable } from "@angular/core";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put(config.DB_URL, this.recipeService.getRecipes());
  }

  getRecipes() {
     this.http.get(config.DB_URL)
        .map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients']  = [];
              }
            }
            return recipes;
          }
        )
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          },
          (error: Response) => console.log(error)
        );
  }


}
