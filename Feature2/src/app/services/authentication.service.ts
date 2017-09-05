import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private cookieService:CookieService, private router:Router) { }

    login(username: string, password: string) {
        if (username == "wrong"){
            return false;
        }
        this.cookieService.put('currentUser', JSON.stringify({ 'username': username, 'password': password }));
        return true;
    }

    logout() {
        // remove user from local storage to log user out
        this.cookieService.remove('currentUser');
    }
}