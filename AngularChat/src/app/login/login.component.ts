import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  errorMessage = null;
  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(() => {
      this.isLoggedIn = true;
      console.log("成功");
    }, (error) => {
      this.isLoggedIn = false;
      console.log("失敗");
      this.errorMessage = "ログインできませんでした。";
    });
  }

}
