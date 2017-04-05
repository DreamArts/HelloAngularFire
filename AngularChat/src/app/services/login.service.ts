import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginService {

  constructor(private af: AngularFire) { }

  login(success: () => void, failure: (error) => void) {
    this.af.auth.login().then((authState) => {
      success();
    }, (error) => {
      failure(error);
    });    
  }

  logout() {
    this.af.auth.login();
  }

  isLoggedIn(result: (isLoggedIn: boolean) => void) {
    this.af.auth.subscribe((auth) => {
      result(auth ? true : false);
    }, (error) => {
      result(false);
    });
  }    
}
