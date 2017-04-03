import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  errorMessage: string = null;
  isLoggedIn = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.isLoggedIn((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn) {
        this.router.navigate(["timeline"]);
      }
    });
  }

  login() {
    this.errorMessage = null;
    this.loginService.login(() => {
      // 成功
      console.log("login succeed.");
      this.isLoggedIn = true;
      this.router.navigate(["timeline"]);
    }, (error) => {
      // 失敗
      this.isLoggedIn = false;
      this.errorMessage = "ログインできませんでした。(" + error.message + ")";
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate([""]);
  }
}
