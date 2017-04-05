import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  errorMessage = null;
  isLoggedIn = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(() => {
      this.isLoggedIn = true;
      console.log("成功");
      this.router.navigate(["timeline"]);
    }, (error) => {
      this.isLoggedIn = false;
      console.log("失敗");
      this.errorMessage = "ログインできませんでした。";
    });
  }

}
