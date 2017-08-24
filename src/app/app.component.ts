import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from "app/config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: config.authDomain
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
