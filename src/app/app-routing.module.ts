import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { SigninComponent } from 'app/auth/signin/signin.component';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { HomeComponent } from "app/home/home.component";

const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


