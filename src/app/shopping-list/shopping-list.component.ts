import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>; // this.ingredients is a

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }
// we inject the store in the constructor. The store this component is interested in is the ingredient store
  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList'); // store.select returns an observable
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
