import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
 user = {};
  private isAuth: boolean;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this._changeState(user)
        console.log(user)
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

  }

  logout() {
    this.af.auth.logout();
  }

  private _getUserInfo(user: any): any {
    if (!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private _changeState(user: any = null) {
    if (user) {
      this.isAuth = true;
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.user = {};
    }
  }

}
