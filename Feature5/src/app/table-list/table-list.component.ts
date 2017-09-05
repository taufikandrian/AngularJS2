import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { User } from '../user'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [UserService]
})
export class TableListComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User): void {  
    this.selectedUser = user;
  }
  
  gotoDetail(user: User): void {
    this.selectedUser = user;
    this.router.navigate(['/home/users', this.selectedUser.id]);
  }
}
