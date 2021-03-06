import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../helpers/endpoints';

@Injectable()
export class HttpAuthService {

  constructor( private http: HttpClient ) { }

  public registerUser(data) {
   return this.http.post(Endpoints.register, data);
  }

  public loginUser(data) {
    return this.http.post(Endpoints.login, data);
  }

}
