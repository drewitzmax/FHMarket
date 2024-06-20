import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  protected username: string ="";
  protected phone: string ="";
  protected city: string ="";
  protected zip: string ="";
  protected street: string ="";
  protected housenr: string ="";
  constructor(private userService: UserService) { }


  register(){
    this.userService.register({
      username: this.username,
      email: null,
      telephone: this.phone,
      address:{
        city: this.city,
        street: this.street,
        houseNr: this.housenr,
        zip: this.zip,
        postings: []
      }
    });
  }
}
