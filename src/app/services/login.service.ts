import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private ready: Promise<void>;
  constructor(private http: HttpClient, private oauth: OAuthService) {
    this.ready = new Promise(resolve => {
      const authConfig: AuthConfig = {
        issuer: "https://accounts.google.com",
        strictDiscoveryDocumentValidation: false,
        clientId: "963313514037-88se2dtsfgiomnnublkdt879mr54ul9n.apps.googleusercontent.com",
        redirectUri: window.location.origin,
        scope:"openid email"
      };
      this.oauth.configure(authConfig);
      this.oauth.setupAutomaticSilentRefresh();
      this.oauth.loadDiscoveryDocumentAndTryLogin().then(res => resolve()).catch(err => console.log(err));
    })
  }

  public async isLoggedIn(): Promise<boolean>{
    await this.ready;
    return this.oauth.hasValidAccessToken();
  }

  public getToken(){
    return this.oauth.getIdToken();
  }

  async login() {
    await this.ready;
    this.oauth.initImplicitFlow();
  }
  logout(){
    this.oauth.logOut();
  }

}
