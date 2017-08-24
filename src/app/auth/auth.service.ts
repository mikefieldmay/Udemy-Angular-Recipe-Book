import {Response} from '@angular/http';
import * as firebase from 'firebase';

export class AuthService {
  token = '';

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
          return firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
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

}
