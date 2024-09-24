import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_INITIALIZER} from "@angular/core";
import {KeycloakBearerInterceptor, KeycloakService} from "keycloak-angular";
import {initializeKeyCloak} from "./init/keycloak-init";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    {
     provide: KeycloakService,
     useClass: KeycloakService
    },
    {
    provide: APP_INITIALIZER,
      useFactory: initializeKeyCloak,
      multi: true,
      deps: [KeycloakService]
    },{
    provide: HTTP_INTERCEPTORS,
    useClass: KeycloakBearerInterceptor,
    multi: true
    },
    provideHttpClient(
      withInterceptorsFromDi()
    )
  ],
};
