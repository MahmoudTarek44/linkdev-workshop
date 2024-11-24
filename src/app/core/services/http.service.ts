import {HttpClient, HttpContext} from "@angular/common/http";
import {inject, Injectable} from '@angular/core';

import {noLoadingToken} from "../interceptors/loading.interceptor";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _HTTP = inject(HttpClient)

  _requestContext = new HttpContext()

  _fetchData<T>(
    endPoint: string,
    options?: {
      pagination?: any,
      filter?: any,
      sort?: "asc" | "desc",
      globalLoader?: boolean
    }
  ) {
    return this._HTTP.get<T>(endPoint, {
      params: {...options?.filter, ...options?.pagination},
      context: this._requestContext.set(noLoadingToken, options?.globalLoader || true)
    });
  }

  _fetchDataById<T>(endPoint: string, id: number, options?: {
    globalLoader?: boolean
  }) {
    return this._HTTP.get<T>(endPoint + id, {context: this._requestContext.set(noLoadingToken, options?.globalLoader || true)});
  }
}
