import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../shared/adverts.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { AdvertModel, ImageModel } from '../../core/models/advert.model';
@Component({
  selector: 'app-adverts-create',
  templateUrl: './adverts-create.component.html',
  styleUrls: ['./adverts-create.component.sass']
})
export class AdvertsCreateComponent implements OnInit {

  constructor( private advertService: AdvertsService, private router: Router) { }

  createAdvert(data) {
    this.advertService.createAdvert(data).subscribe(
      (newAdvertData: ImageModel) =>{
        console.log(newAdvertData);
        this.router.navigate([`/adverts/view/${newAdvertData.advert}`])
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    
  }

}
