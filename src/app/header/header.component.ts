import {Response} from '@angular/http';
import { Component } from '@angular/core';
import { DataStorageService } from "app/data-storage.service";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private dsService: DataStorageService) {
  }

  onSave() {
    this.dsService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response),
        (error: Response) => console.log(error)
      );
  }

  onFetch() {
    this.dsService.getRecipes();
  }
}
