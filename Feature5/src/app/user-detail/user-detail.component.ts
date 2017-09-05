import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { UserService } from '../services/user.service'
import { User } from '../user'
import 'rxjs/add/operator/switchMap';

@Component({
  selector : 'user-detail',
  templateUrl : 'user-detail.component.html',
  styleUrls : ['user-detail.component.css'],
  providers : [UserService]
})
export class UserDetailComponent{
    @Input() user:User;
    router:Router;

    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
        .subscribe(user => this.user = user);
    }

    goBack(): void {
      this.location.back();
    }

}