import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../shared/adverts.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-adverts-create',
  templateUrl: './adverts-create.component.html',
  styleUrls: ['./adverts-create.component.sass']
})
export class AdvertsCreateComponent implements OnInit {

  constructor( private advertService: AdvertsService) { }

  createAdvert(data) {
    this.advertService.createAdvert(data).subscribe(
      (newAdvertData) =>{
        console.log(newAdvertData);
      //   const obsArray = this.advertService.addImagesToAdvert(newAdvertData , data.images);
      //   debugger;
      //   forkJoin(obsArray).subscribe(
      //     (newImagesData) => {
      //       console.log(newImagesData);
      //     }, (error) => {
      //       console.log(error);
      //     }
      //   );
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    
  }

}
