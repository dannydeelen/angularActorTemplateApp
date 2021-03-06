import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-landingspage',
  templateUrl: './landingspage.component.html',
  styleUrls: ['./landingspage.component.css']
})
export class LandingspageComponent implements OnInit {
  user = {}
  constructor(public af : AngularFire, public router :Router) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
        // user logged in
        this.router.navigate(['/projects'])
      }
      else {
        // user not logged in
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit() {
  }
  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login'])
  }

}
