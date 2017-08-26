import {Router} from '@angular/router';
import {Response} from '@angular/http';
import * as firebase from 'firebase';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {
  }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response: Response) => {
          this.router.navigate(['/']);
          return firebase.auth().currentUser.getToken()
            .then(

              (token: string) => {

                this.token = token;
                console.log(this.token);
              }
            );
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
          (token: string) => this.token = token
        );
    return this.token;
  }

  setToken() {
    this.token = '';
    this.getToken();
  }

  isAuthenticated() {
    return this.token !== undefined;
  }

  logout() {
    firebase.auth().signOut();
    this.token = undefined;
    this.router.navigate(['./recipes']);
  }

}
