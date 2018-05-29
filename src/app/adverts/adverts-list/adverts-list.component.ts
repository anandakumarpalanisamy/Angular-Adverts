import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../adverts.service';
import { AdvertModel } from '../../core/models/advert.model';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.sass']
})
export class AdvertsListComponent implements OnInit {
  
  advertsList: AdvertModel[];

  constructor(private advertsService: AdvertsService) {
    this.advertsService.getAdvertsList().subscribe(
      (data: AdvertModel[]) => {
        this.advertsList = data;
        console.log(this.advertsList);
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
