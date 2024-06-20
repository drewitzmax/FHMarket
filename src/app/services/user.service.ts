import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static sessionStorageKey = "fhmarketuser";
  private static user_service_url = environment.userService;

  constructor(private http: HttpClient, private login: LoginService) { }

  public async getUserData() {
    let val = sessionStorage.getItem(UserService.sessionStorageKey);
    if (val) {
      return JSON.parse(val);
    }
    return await new Promise((resolve, reject) => {
      this.http.get(UserService.user_service_url, {headers:{Authorization: `Bearer ${this.login.getToken()}`}}).subscribe({
        next: value => {
          console.log("USER", value)
          sessionStorage.setItem(UserService.sessionStorageKey, JSON.stringify(value))
          resolve(value);
        }
        , error: err => reject(err)
      });
    });
  }

  public async register(param: any) {
    return await new Promise((resolve, reject) => {
      this.http.post(UserService.user_service_url, param, {headers: {Authorization: `Bearer ${this.login.getToken()}`}}).subscribe({
        next: value => {
          console.log("USER", value)
          sessionStorage.setItem(UserService.sessionStorageKey, JSON.stringify(value))
          resolve(value);
        }
        , error: err => reject(err)
      });});
  }

  public getCurrentUser(){
    return JSON.parse(sessionStorage.getItem(UserService.sessionStorageKey) || "null");
  }
}
