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

  public createAdvert(data) {
    return this.http.post(`${Endpoints.adverts}`, data);
  }

  public addImageToAdvert(data, id) {
    const dataObj = {
      advert_pk: id,
      advert: id,
      file: data
    }    
    const url = `${Endpoints.adverts}${id}/image/`;
    return this.http.post(url, dataObj);
  }
}
