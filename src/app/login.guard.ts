import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";

export const loginGuard: CanActivateFn = async (route, state) => {
  const login = inject(LoginService);
  const router = inject(Router);
  if(!login.isLoggedIn()) return router.createUrlTree(["/login"]);
  const user = await inject(UserService).getUserData()
  return user ? true : router.createUrlTree(["/register"])
};
