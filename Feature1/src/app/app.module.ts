import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { UserDetailComponent } from './user-detail/user-detail.component';

import { PeriodComponent } from './period/period.component'
import { ListPeriodComponent } from './period/listPeriod/listPeriod.component'
import { CreatePeriodComponent } from './period/createPeriod/createPeriod.component'
import { EditPeriodComponent } from './period/editPeriod/editPeriod.component';
import { SchedulePeriodComponent } from './period/schedulePeriod/schedulePeriod.component';
import { EligibleParticipantPeriodComponent } from './period/eligibleParticipantPeriod/eligibleParticipantPeriod.component';

import { EnrollmentComponent } from './enrollment/enrollment.component'
import { ListEnrollmentComponent } from './enrollment/listEnrollment/listEnrollment.component'
import { DetailEnrollmentComponent } from './enrollment/detailEnrollment/detailEnrollment.component'

import { UserService, AuthenticationService, AlertService } from './services/index' ;
import { AuthGuard } from './guards/authguard.component'

// For PBI 7 Angular 2
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { NguiDatetimePickerModule } from '@ngui/datetime-picker';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PeriodComponent,
    ListPeriodComponent,
    CreatePeriodComponent,
    EditPeriodComponent,
    SchedulePeriodComponent,
    EligibleParticipantPeriodComponent,
    EnrollmentComponent,
    ListEnrollmentComponent,
    DetailEnrollmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NguiDatetimePickerModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
