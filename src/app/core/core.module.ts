import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAuthService } from './http-services/http-auth.service';
import { HttpAdvertsService } from './http-services/http-adverts.service';
import { HttpProfileService } from './http-services/http-profile.service';
import { HttpClientModule } from '@angular/common/http';

const HTTP_PROVIDERS = [
  HttpAuthService,
  HttpAdvertsService,
  HttpProfileService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...HTTP_PROVIDERS
  ],
})
export class CoreModule { }
