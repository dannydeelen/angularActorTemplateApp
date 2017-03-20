import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class UserService {

  constructor() {
  }

  user = {}

  setUser(theUser: any) {
    this.user = theUser;
  }

  getUser() {
    return this.user;
  }
}
