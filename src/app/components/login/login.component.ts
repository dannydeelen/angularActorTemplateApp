import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from "@angular/router";
import {UserService} from "../../services/user-service.service";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(public af: AngularFire, private router: Router, private userservice: UserService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.router.navigate(['/projects'])
      }
      else {
        // user not logged in
        this.router.navigate(['/login'])
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
    });
  }
}
