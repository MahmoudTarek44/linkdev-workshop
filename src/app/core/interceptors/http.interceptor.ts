import {HttpInterceptorFn} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

import {environment} from "../../../environments/environment";

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  const clonedRequest = request.clone({
    url: `${environment.BASE_URL}${request.url}`,
  });

  return next(clonedRequest).pipe(
    catchError((error) => throwError(() => error))
  )
};
