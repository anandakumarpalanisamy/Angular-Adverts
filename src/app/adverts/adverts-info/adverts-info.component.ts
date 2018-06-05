import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../shared/adverts.service';
import { AdvertModel } from '../../core/models/advert.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adverts-info',
  templateUrl: './adverts-info.component.html',
  styleUrls: ['./adverts-info.component.sass']
})
export class AdvertsInfoComponent implements OnInit {

  public advertData: AdvertModel;
  public isOwner: boolean;

  constructor(private advertService: AdvertsService,private activeRouter: ActivatedRoute, private router: Router  ) {
    this.activeRouter.params.subscribe(params => {
      this.getSelectedAdvert(params['id']);
    });
  }

  getSelectedAdvert(id) {
    this.advertService.getAdvertById(id).subscribe(
      (data: AdvertModel) => {
        this.advertData = data;
        this.isOwner = false;
        const userData = JSON.parse(localStorage.getItem('user_data'));
        if(this.advertData.owner.id === userData.id) {
          this.isOwner = true;
        } else {
          this.isOwner = false;
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  showEditProduct(id) {
    this.router.navigate([`adverts/edit/${id}`]);
  }

  ngOnInit() {
    
  }

}
