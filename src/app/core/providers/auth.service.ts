import { Injectable } from '@angular/core';
import { HttpAuthService } from '../http-services/http-auth.service';
import { map } from 'rxjs/operators';
import { AuthData } from '../models/AuthData.model';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private httpAuth: HttpAuthService, private sessionService: SessionService) { 

  }

  public registerUser(data) {
    return this.httpAuth.registerUser(data);
  }

  public loginUser(data) {
    return this.httpAuth.loginUser(data);
  }
  
}
