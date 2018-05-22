import { Injectable } from '@angular/core';
import { HttpAuthService } from '../http-services/http-auth.service';
import { map } from 'rxjs/operators';
import { AuthData } from '../models/AuthData.model';
@Injectable()
export class AuthService {

  constructor(private httpAuth: HttpAuthService) { }

  registerUser(data) { 
    return this.httpAuth.registerUser(data);
  }

  loginUser(data) {
    return this.httpAuth.registerUser(data);
  }

}
