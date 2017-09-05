import { Component, OnInit, NgModule } from '@angular/core';  
import { CookieService } from 'angular2-cookie/core';
import { DataTableModule } from 'angular2-datatable';

@Component({
    selector: 'my-listEnrollment',
    templateUrl: './listEnrollment.component.html'
})

export class ListEnrollmentComponent implements OnInit{
    currentUser:any;

    constructor(private cookieService:CookieService){

    }

    ngOnInit(){
        this.currentUser = JSON.parse(this.cookieService.get('currentUser'));
    }
}
