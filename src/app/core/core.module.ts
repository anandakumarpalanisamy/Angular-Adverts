import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpAuthService } from './http-services/http-auth.service';
import { HttpAdvertsService } from './http-services/http-adverts.service';
import { HttpProfileService } from './http-services/http-profile.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './providers/auth.service';
import { SessionService } from './providers/session.service';

import { AuthGuard } from './guards/auth.guard';
import { AdvertsService } from '../adverts/shared/adverts.service';
import { AuthInterceptor } from './providers/auth.interseptor';

const HTTP_PROVIDERS = [
  HttpAuthService,
  HttpAdvertsService,
  HttpProfileService
];
const SERVICE_PROVIDERS = [
  AuthService,
  SessionService,
  AdvertsService
];
const GUARD_PROVIDERS = [
  AuthGuard
];
const INTERSEPTOR = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...INTERSEPTOR, ...HTTP_PROVIDERS, ...SERVICE_PROVIDERS, ...GUARD_PROVIDERS
  ],
})
export class CoreModule { }
