import {StoreModule} from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from 'app/data-storage.service';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';
import { AuthModule } from "app/auth/auth.module";
import { HomeComponent } from './home/home.component';
import { shoppingListReducer } from 'app/shopping-list/store/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    }) // this is for eagerly loaded modules
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
