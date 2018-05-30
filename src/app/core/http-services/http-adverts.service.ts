import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../helpers/endpoints';

@Injectable()
export class HttpAdvertsService {

  constructor(private http: HttpClient) {

  }

  public advertsList(link) {
    return this.http.get(link);
  }

  public advertById(id) {
    return this.http.get(`${Endpoints.adverts}/${id}`);
  }

}
