import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  public signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {this.signinUser(email, password)}
      )
      .catch(
        error => console.log(error)
      )
  }

  public signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  public logout() {
    firebase.auth().signOut();
    this.token = undefined;
  }

  public isAuthenticated() {
    return firebase.auth().currentUser != undefined;
  }
}
