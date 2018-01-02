import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs/Subscription";
import * as fromShoppingList from "./store/shopping-list.reducers";
import * as fromShoppingListActions from "./store/shopping-list.actions";



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>; // this.ingredients is a

  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }
  // we inject the store in the constructor. The store this component is interested in is the ingredient store
  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
   // store.select returns an observable
  }

  onEditItem(index: number) {
    this.store.dispatch(new fromShoppingListActions.StartEdit(index));
  }

}
