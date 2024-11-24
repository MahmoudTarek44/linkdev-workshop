import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";

import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  return authService.isLoggedIn();
};
