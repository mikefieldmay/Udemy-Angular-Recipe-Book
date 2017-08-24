import {Recipe} from './recipes/recipe.model';
import {RecipeService} from './recipes/recipe.service';
import {Response, Http} from '@angular/http';
import 'rxjs/Rx';
import { config } from './config';

import { Injectable } from "@angular/core";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(config.DB_URL + '?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

     this.http.get(config.DB_URL + '?auth=' + token)
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
