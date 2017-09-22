import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { SigninComponent } from 'app/auth/signin/signin.component';
import { AuthGuard } from 'app/auth/auth-guard.service';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


