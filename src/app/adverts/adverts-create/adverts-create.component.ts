import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../shared/adverts.service';

@Component({
  selector: 'app-adverts-create',
  templateUrl: './adverts-create.component.html',
  styleUrls: ['./adverts-create.component.sass']
})
export class AdvertsCreateComponent implements OnInit {

  constructor( private advertService: AdvertsService) { }

  createAdvert(data) {
    this.advertService.createAdvert(data.advert).subscribe(
      (data) =>{
        console.log(data);
        debugger;
      }, (error) => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    
  }

}
