import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";

import {catchError, throwError} from "rxjs";

import {AuthService} from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const authenticatedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.accessToken()}`,
    },
  });

  return next(authenticatedRequest).pipe(
    catchError((error: HttpErrorResponse) => throwError(() => error))
  )
};
