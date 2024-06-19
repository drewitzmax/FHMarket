import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private oauth: OAuthService) {
    this.init();
  }

  public isLoggedIn(): boolean{
    debugger;
    return this.oauth.hasValidAccessToken();
  }

  login() {
    this.oauth.initImplicitFlow();
  }
  logout(){
    this.oauth.logOut();
  }

  private init(){
    const authConfig: AuthConfig = {
      issuer: "https://accounts.google.com",
      strictDiscoveryDocumentValidation: false,
      clientId: "963313514037-88se2dtsfgiomnnublkdt879mr54ul9n.apps.googleusercontent.com",
      redirectUri: window.location.origin,
      scope:"openid profile email"
    };
    this.oauth.configure(authConfig);
    this.oauth.setupAutomaticSilentRefresh();
    this.oauth.loadDiscoveryDocumentAndTryLogin();
  }
}
