import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

// deprecated (wordt niet meer gebruikt) voorlopig iig niet

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
