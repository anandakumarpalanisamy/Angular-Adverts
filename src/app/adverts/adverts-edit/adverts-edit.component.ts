import { Component, OnInit } from '@angular/core';
import { AdvertModel } from '../../core/models/advert.model';
import { AdvertsService } from '../shared/adverts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adverts-edit',
  templateUrl: './adverts-edit.component.html',
  styleUrls: ['./adverts-edit.component.sass']
})
export class AdvertsEditComponent implements OnInit {

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
