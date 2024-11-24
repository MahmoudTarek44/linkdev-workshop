import {toSignal} from "@angular/core/rxjs-interop";
import {inject, Injectable} from '@angular/core';

import {map} from "rxjs";

import {HttpService} from "../../../../core/services/http.service";

import HOME_API from "../../../../core/API/home.api";
import {Slide} from "./banner.component";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  _HTTP = inject(HttpService)

  _slideList = toSignal(
    this._HTTP._fetchData<{ slides: Slide[] }>(HOME_API.BANNER).pipe(
      map(response => response.slides),
    )
  )

}
