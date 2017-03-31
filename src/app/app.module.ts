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
import {
  AuthMethods,
  AuthProviders
} from "angularfire2";
import {UserService} from "./services/user-service.service";
import {FirebaseIOService} from "./services/firebase-io.service";
import { ProjectComponent } from './components/project/project.component';
import {ProjectService} from "./services/project.service";
import { ActorComponent } from './components/actor/actor.component';
import {ActorService} from "./services/actor.service";
import { AddpersonComponent } from './components/person/person.component';
import { ActordetailsComponent } from './components/actordetails/actordetails.component';
import {PersonService} from "./services/person.service";
import { PersoonpipePipe } from './pipes/persoonpipe.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyB3HBTlvQog9e_RLvwo9JHKW_2cVpJuSp0",
  authDomain: "actortemplateapp-ec651.firebaseapp.com",
  databaseURL: "https://actortemplateapp-ec651.firebaseio.com",
  storageBucket: "actortemplateapp-ec651.appspot.com",
  messagingSenderId: "982486536780"
};
const routes = [
  {path:'login', component: LoginComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'projects/:title', component: ProjectComponent},
  {path:'projects/:title/:actorTitle', component: ActorComponent},
  {path:'projects/:title/:actorTitle/details', component: ActordetailsComponent},
  {path:'projects/:title/newActor', component: ActorComponent},
  {path:'projects/:title/:actorTitle/:personName', component: AddpersonComponent},
  {path:'projects/:title/:actorTitle/newPerson', component: AddpersonComponent},
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
    ProjectComponent,
    ActorComponent,
    AddpersonComponent,
    ActordetailsComponent,
    PersoonpipePipe,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, FirebaseIOService, ProjectService, ActorService, PersonService],
  bootstrap: [LandingspageComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

