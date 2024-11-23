import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";

import {AuthService} from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const authenticatedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.accessToken()}`,
    },
  });

  return next(authenticatedRequest);
};
