import {HttpErrorResponse, HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";

import {TranslateService} from "@ngx-translate/core";
import {catchError, throwError} from "rxjs";

import {environment} from "../../../environments/environment";

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  const translateService = inject(TranslateService)

  const clonedRequest = request.clone({
    url: `${environment.BASE_URL}${request.url}`,
    headers: request.headers.set(
      'Accept-Language',
      translateService.currentLang
    ),
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => throwError(() => error))
  )
};
