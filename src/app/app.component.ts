import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from "app/config";
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: config.authDomain
    });
    firebase.auth().onAuthStateChanged(
      (response) => {
        if (response !== null) {
          this.authService.setToken();
        };
      }
    );
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
