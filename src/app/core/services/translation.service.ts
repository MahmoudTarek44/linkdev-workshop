import {HttpBackend} from "@angular/common/http";
import {inject, Injectable} from '@angular/core';

import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";
import {TranslateService} from "@ngx-translate/core";

export function HttpLoaderFactory(_httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(_httpBackend, ['/i18n/']);
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translate = inject(TranslateService)

  _changeLang(lang: LANG): void {
    this.translate.use(lang);
  }
}

export enum LANG {
  AR = "ar",
  EN = "en",
}
