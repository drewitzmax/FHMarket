import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static sessionStorageKey = "fhmarketuser";
  private static user_service_url = "/User";

  constructor(private http: HttpClient, private login: LoginService) { }

  public async getUserData() {
    let val = sessionStorage.getItem(UserService.sessionStorageKey);
    if (val) {
      return JSON.parse(val);
    }
    return await new Promise((resolve, reject) => {
      this.http.get(UserService.user_service_url).subscribe({
        next: value => {
          console.log("USER", value)
          sessionStorage.setItem(UserService.sessionStorageKey, JSON.stringify(value))
          resolve(value);
        }
        , error: err => reject(err)
      });
    });
  }
}
