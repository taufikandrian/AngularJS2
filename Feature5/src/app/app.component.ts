import { Component, OnInit, Input } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  login = false;

  constructor(public location: Location) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.login = true;
    }
  }

  isLogin():boolean{
    return this.login;
  }

}
