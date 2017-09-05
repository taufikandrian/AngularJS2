import { Component, OnInit, ElementRef } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index'

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'users', title: 'Users',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser;
  activeMenu;

  constructor(
      private location: Location, 
      private cookieService: CookieService, 
      private router:Router, 
      private element: ElementRef,
      private authenticationService:AuthenticationService) { }

     ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        if (this.cookieService.get('currentUser')){
            this.currentUser = JSON.parse(this.cookieService.get('currentUser'));
        } else { 
            this.router.navigate(['/login']) 
            alert("You are not logged in!");
        };
        this.getActiveMenu();
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    logout(){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }   

    getActiveMenu(){
        var path = this.location.prepareExternalUrl(this.location.path());
        path = path.split('/')[2];
        for(var item = 0; item < this.menuItems.length; item++){
            if(this.menuItems[item].path == path){
                this.menuItems[item].class = "active";
            } else {
                this.menuItems[item].class = "";
            }
        }
        
    }
}
