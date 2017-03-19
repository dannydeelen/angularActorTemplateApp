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
 public user = {};

  constructor(public af: AngularFire, private router: Router, private userservice : UserService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in

        console.log(user)
        this.router.navigate(['/projects'])
      }
      else {
        // user not logged in
        this.user = {};
        console.log(user)
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
    });
    this.userservice.setUser(this.user)
  }
}
