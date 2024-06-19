import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private login: LoginService, private router: Router) { }

  protected loginCall(){
    this.login.login()
    this.router.navigateByUrl("/home")
  }
}
