import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor (private authService: AuthService) {}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA4KJ8l5W3C7qcTxbRBI13_HXqEv5iZHb8",
      authDomain: "carnival-pos.firebaseapp.com",
    });

  this.authService.initializeToken();
  }
}
