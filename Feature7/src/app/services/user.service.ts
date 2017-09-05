import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { User } from '../user';
import { USERS } from '../mock-users';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  // getUsers(): Promise<User[]> {
  //   return Promise.resolve(USERS);
  // }
  
  // getUser(id: number): Promise<User> {
  //   return this.getUsers()
  //              .then(users => users.find(user => user.id === id));
  // }



  //--------------------------------
  //      For PBI 7 Angular 2
  //--------------------------------

  usersUrl:string = 'api/users';

  constructor(private http:Http){}

  getUsers(): Promise<User[]> {
    console.log(this.http.get(this.usersUrl));
    
    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json().data as User[])
    .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as User)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}