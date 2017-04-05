import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginService {

  constructor(private af: AngularFire) { }

  login(success: () => void, failure: (error) => void) {
    this.af.auth.login().then((authState) => {
      CurrentUser.setUserName(authState.auth.displayName);
      CurrentUser.setPhotoUrl(authState.auth.photoURL);
      // 成功
      success();
    }, (error) => {
      // 失敗
      failure(error);
    });
  }

  logout() {
    this.af.auth.logout();
    CurrentUser.removeUserInfo();
  }

  isLoggedIn(result: (isLoggedIn: boolean) => void) {
    this.af.auth.subscribe((auth) => {
      result(auth ? true : false);
    }, (error) => {
      result(false);
    });
  }
}

namespace CurrentUserKeys {
  export const USER_NAME = "current_user_name";
  export const PHOTO_URL = "current_user_photo_url";
}

export class CurrentUser {
  static userName(): string {
    return localStorage.getItem(CurrentUserKeys.USER_NAME);
  }

  static photoUrl(): string {
    return localStorage.getItem(CurrentUserKeys.PHOTO_URL);
  }

  static setUserName(userName: string) {
    localStorage.setItem(CurrentUserKeys.USER_NAME, userName);
  }

  static setPhotoUrl(url: string) {
    localStorage.setItem(CurrentUserKeys.PHOTO_URL, url);
  }

  static removeUserInfo() {
    localStorage.removeItem(CurrentUserKeys.USER_NAME);
    localStorage.removeItem(CurrentUserKeys.PHOTO_URL);
  }
}