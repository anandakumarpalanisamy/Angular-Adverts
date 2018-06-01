import { Injectable } from '@angular/core';
import { HttpAdvertsService } from '../../core/http-services/http-adverts.service';

@Injectable()
export class AdvertsService {

  constructor(private httpAdverts: HttpAdvertsService) { }

  public getAdvertsList(link) {
   return  this.httpAdverts.advertsList(link);
  }

  public getAdvertById(id) {
    return this.httpAdverts.advertById(id);
  }

  public createAdvert(data) {
    return this.httpAdverts.createAdvert(data);
  }
}

