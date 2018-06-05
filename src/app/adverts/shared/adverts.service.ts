import { Injectable } from '@angular/core';
import { HttpAdvertsService } from '../../core/http-services/http-adverts.service';
import { switchMap, concatMap, map, mergeMap } from 'rxjs/operators';
import { AdvertModel } from '../../core/models/advert.model';
import { from, Observable } from 'rxjs';

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
    const advert = data.advert;
    let images = [];
    if(data.images) {
      images = data.images.map((item) => item.base64);
      return this.httpAdverts.createAdvert(advert)
      .pipe(
        switchMap((res: AdvertModel) => {
          return from(images).pipe(
            concatMap((img) => this.httpAdverts.addImageToAdvert(img, res.pk))
          );
        })
      );
    } else {
      return this.httpAdverts.createAdvert(advert);
    }
  }

  public editAdvert(data, id) {
    // dodelat
    const advert = data.advert;
    let images = [];
    if(data.images) {
      images = data.images.map((item) => item.base64);
      return this.httpAdverts.editAdvert(advert , id)
      .pipe(
        switchMap((res: AdvertModel) => {
          return from(images).pipe(
            concatMap((img) => this.httpAdverts.addImageToAdvert(img, res.pk))
          );
        })
      );
    } else {
      return this.httpAdverts.editAdvert(advert , id)
    }
  }

  public  addImagesToAdvert(advert, images) {
    const arrayOfReadyImages = [];
    if(images) {
      for( let image of images) {
        arrayOfReadyImages.push( this.httpAdverts.addImageToAdvert( image, advert.pk ));
      }
    }
    return arrayOfReadyImages;
  }

  public deleteImage(advertId, imageId) {
    return this.httpAdverts.deleteImage(advertId, imageId);
  }
}

