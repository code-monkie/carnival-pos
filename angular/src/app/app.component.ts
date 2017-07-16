import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public constructor () {
  }

  public ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA4KJ8l5W3C7qcTxbRBI13_HXqEv5iZHb8",
      authDomain: "carnival-pos.firebaseapp.com",
      databaseURL: "https://carnival-pos.firebaseio.com",
    });
  }
}
