import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


