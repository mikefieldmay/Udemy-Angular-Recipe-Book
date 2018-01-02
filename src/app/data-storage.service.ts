import {Recipe} from './recipes/recipe.model';
import {RecipeService} from './recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import { config } from './config';

import { Injectable } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(config.DB_URL + '?auth=' + token, this.recipeService.getRecipes()); 
    // This method works exactly the same as it previously did
  }

  getRecipes() {
    const token = this.authService.getToken();

     this.http.get<Recipe[]>(config.DB_URL + '?auth=' + token) // We can tell the HTTPClient which type of data we're getting back
        // By default the HttpClient extracts the body of the response by default and assumes we get json data
        .map(
          (recipes) => {
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
