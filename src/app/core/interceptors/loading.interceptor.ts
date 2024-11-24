import {HttpContextToken, HttpEventType, HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";

import {tap} from "rxjs";

import {LayoutService} from "../services/layout.service";


// NOTE: use this token for every request at which we don't need to global loading.
export const noLoadingToken = new HttpContextToken(() => false);

export const loadingInterceptor: HttpInterceptorFn = (request, next) => {
  const layoutService = inject(LayoutService);

  if (request.context.get(noLoadingToken)) return next(request);

  layoutService._isLoading.set(true);

  return next(request).pipe(
    tap(response =>
      response.type === HttpEventType.Response && layoutService._isLoading.set(false)
    ),
  );
};
