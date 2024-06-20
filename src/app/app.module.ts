import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {OAuthModule, OAuthService} from "angular-oauth2-oidc";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, OAuthModule.forRoot({
    resourceServer: {
      sendAccessToken: false,
      allowedUrls: ['http://localhost:4200','http://localhost:8080', 'https://userwebservice-dot-authwfp1.oa.r.appspot.com/', 'https://us-central1-aiprojekt-425908.cloudfunctions.net/inserat']
    }
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
