import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  HTTP = inject(HttpClient)

  _getDataFromServer<T>(
    endPoint: string,
    options?: {
      pagination?: any,
      filter?: any,
    }
  ) {
    return this.HTTP.get<T>(endPoint, {params: {...options?.filter, ...options?.pagination}});
  }
}
