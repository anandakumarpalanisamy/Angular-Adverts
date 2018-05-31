import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdvertModel, infinityAdvertsModel } from '../../core/models/advert.model';
import { Endpoints } from '../../helpers/endpoints';
import { AdvertsService } from '../shared/adverts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.sass']
})
export class AdvertsListComponent implements OnInit {
  
  public advertsList: AdvertModel[] = [];
  public endpointLink =  `${Endpoints.adverts}?limit=20`;
  public requestComplete: boolean;
  private listComplete: boolean;

  constructor(private advertsService: AdvertsService, private router: Router) {
    this.listComplete = false;
    this.loadAdverts(this.endpointLink);
  }

  public loadAdverts(link) {
    this.requestComplete = false;
    if(!this.listComplete) {
      this.advertsService.getAdvertsList(link).subscribe(
        (data: infinityAdvertsModel ) => {
          this.endpointLink = data.next;
          this.advertsList = [...this.advertsList, ...data.results];
          this.requestComplete = true;
          if( data.count === this.advertsList.length ) {
            this.listComplete = true;
          }
        }, (error) => {
          console.log(error);
        }
      );
    }
  }

  public getMoreInfo(id) {
    this.router.navigate([`/adverts/view/${id}`]);
  }

  public showCreateProduct() {
    this.router.navigate([`/adverts/create`]);
  }

  ngOnInit() {
   
  }

}
