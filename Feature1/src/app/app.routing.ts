import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { PeriodComponent } from './period/period.component';
import { ListPeriodComponent } from './period/listPeriod/listPeriod.component';
import { CreatePeriodComponent } from './period/createPeriod/createPeriod.component';
import { EditPeriodComponent } from './period/editPeriod/editPeriod.component';
import { SchedulePeriodComponent } from './period/schedulePeriod/schedulePeriod.component';
import { EligibleParticipantPeriodComponent } from './period/eligibleParticipantPeriod/eligibleParticipantPeriod.component';

import { EnrollmentComponent } from './enrollment/enrollment.component'
import { ListEnrollmentComponent } from './enrollment/listEnrollment/listEnrollment.component'
import { DetailEnrollmentComponent } from './enrollment/detailEnrollment/detailEnrollment.component'

import { AuthGuard } from './guards/authguard.component';



const routes: Routes =[
    // { path: '', redirectTo:'home/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent  },
      { path: 'period', component: PeriodComponent, children:[
        { path: 'listPeriod', component: ListPeriodComponent},
        { path: 'createPeriod', component: CreatePeriodComponent},
        { path: 'editPeriod', component: EditPeriodComponent},
        { path: 'schedulePeriod', component: SchedulePeriodComponent},
        { path: 'eligibleParticipantPeriod', component: EligibleParticipantPeriodComponent},
        { path: '', redirectTo: 'listPeriod', pathMatch:'full'},
      ]},

      { path: 'enrollment', component: EnrollmentComponent, children: [
        { path: 'list', component:ListEnrollmentComponent},
        { path: 'detail', component:DetailEnrollmentComponent},
        { path: '', redirectTo:'list', pathMatch:'full'}
      ]},

      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'users',     component: TableListComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent },
      { path: 'users/:id',        component: UserDetailComponent },
      { path: '', redirectTo:'dashboard', pathMatch: 'full'},
      { path: '**', redirectTo:'dashboard'},
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
   
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
