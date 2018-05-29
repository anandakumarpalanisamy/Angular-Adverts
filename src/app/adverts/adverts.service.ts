import { Injectable } from '@angular/core';
import { HttpAdvertsService } from '../core/http-services/http-adverts.service';

@Injectable()
export class AdvertsService {

  constructor(private httpAdverts: HttpAdvertsService) { }

  getAdvertsList() {
   return  this.httpAdverts.advertsList();
  }

}

