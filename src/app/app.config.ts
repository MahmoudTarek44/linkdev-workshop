import {HttpBackend, provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async"
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideTranslateService, TranslateLoader} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./core/services/translation.service";

import {httpInterceptor} from "./core/interceptors/http.interceptor";
import {authInterceptor} from "./core/interceptors/auth.interceptor";
import {routes} from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withInterceptors([httpInterceptor, authInterceptor])),
    provideAnimationsAsync(),
    provideRouter(routes),

    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      },
      defaultLanguage: 'en'
    })
  ]
};
