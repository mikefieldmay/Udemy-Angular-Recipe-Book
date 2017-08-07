import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Carrot', 3),
    new Ingredient('Pumpkin', 1),
    new Ingredient('Squash', 2),
    new Ingredient('Cucumber', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  ingredientAdded(ingredient: Ingredient) {
    console.log('Ingredient added');
    
    this.ingredients.push(ingredient);
  }

}
