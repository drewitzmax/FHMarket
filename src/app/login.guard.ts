import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";

export const loginGuard: CanActivateFn = async (route, state) => {
  debugger
  const login = inject(LoginService);
  const router = inject(Router);
  const userService = inject(UserService);
  if(!(await login.isLoggedIn())) return router.createUrlTree(["/login"]);
  const user = await userService.getUserData()
  return user ? true : router.createUrlTree(["/register"])
};
