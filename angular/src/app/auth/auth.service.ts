import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {this.signinUser(email, password)}
      )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = undefined;
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return firebase.auth().currentUser != undefined;
  }

  initializeToken() {
    this.token = this.getToken();
  }

  getToken(): string {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : undefined;
    }
}
