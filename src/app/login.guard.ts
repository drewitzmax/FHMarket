import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./services/login.service";

export const loginGuard: CanActivateFn = (route, state) => {
  const login = inject(LoginService);
  return login.isLoggedIn() ? true : inject(Router).createUrlTree(["/login"]);
};
