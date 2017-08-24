import {Response} from '@angular/http';
import { Component } from '@angular/core';
import { DataStorageService } from "app/data-storage.service";
import { AuthService } from "app/auth/auth.service";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private dsService: DataStorageService, public authService: AuthService) {
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

  onLogout() {
    this.authService.logout();
  }
}
