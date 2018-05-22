import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAuthService } from './http-services/http-auth.service';
import { HttpAdvertsService } from './http-services/http-adverts.service';
import { HttpProfileService } from './http-services/http-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './providers/auth.service';
import { SessionService } from './providers/session.service';

const HTTP_PROVIDERS = [
  HttpAuthService,
  HttpAdvertsService,
  HttpProfileService
];
const SERVICE_PROVIDERS = [
  AuthService,
  SessionService
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...HTTP_PROVIDERS, ...SERVICE_PROVIDERS
  ]
})
export class CoreModule { }
