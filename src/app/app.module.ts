import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {AngularFireModule} from "angularfire2";
import { LandingspageComponent } from './components/landingspage/landingspage.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCoQYWYF3lf1ABHRE9jU-wZz7iWEC_2kr4",
  authDomain: "angularactortemplateapp.firebaseapp.com",
  databaseURL: "https://angularactortemplateapp.firebaseio.com",
  storageBucket: "angularactortemplateapp.appspot.com",
  messagingSenderId: "28825397903"
};
@NgModule({
  declarations: [
    LandingspageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [LandingspageComponent]
})
export class AppModule { }
