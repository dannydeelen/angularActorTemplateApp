import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {AngularFireModule} from "angularfire2";
import { LandingspageComponent } from './components/landingspage/landingspage.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import {Router, RouterModule} from "@angular/router";
import { LoginRoutingModule }      from './login-routing.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCoQYWYF3lf1ABHRE9jU-wZz7iWEC_2kr4",
  authDomain: "angularactortemplateapp.firebaseapp.com",
  databaseURL: "https://angularactortemplateapp.firebaseio.com",
  storageBucket: "angularactortemplateapp.appspot.com",
  messagingSenderId: "28825397903"
};
const routes = [
  {path:'login', component: LoginComponent},
  // {path:'registrations', component: RegistrationsComponent},
  // {path:'registerworkshop', component: RegisterworkshopComponent},
  // {path:'registerworkshopformvalidation', component: RegisterworkshopformvalidationComponent},
  // {path:'registerworkshopfieldvalidation', component: RegisterworkshopfieldvalidationComponent},
  // {path:'registeronworkshopfieldvalidationplus', component: RegisterworkshopfieldvalidationplusComponent},
  // {path:'inputstates', component: StateinputsexampleComponent},
  // {path:'registrationdetail/:key', component: RegistrationdetailComponent}
]
@NgModule({
  declarations: [
    LandingspageComponent,
    ProjectsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    LoginRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [LandingspageComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

