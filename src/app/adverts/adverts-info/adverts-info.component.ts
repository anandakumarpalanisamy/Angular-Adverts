import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../shared/adverts.service';
import { AdvertModel } from '../../core/models/advert.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adverts-info',
  templateUrl: './adverts-info.component.html',
  styleUrls: ['./adverts-info.component.sass']
})
export class AdvertsInfoComponent implements OnInit {

  public advertData: AdvertModel;

  constructor(private advertService: AdvertsService,private activeRouter: ActivatedRoute  ) {
    this.activeRouter.params.subscribe(params => {
      this.getSelectedAdvert(params['id']);
    });
  }

  getSelectedAdvert(id) {
    this.advertService.getAdvertById(id).subscribe(
      (data: AdvertModel) => {
        this.advertData = data;
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    
  }

}
