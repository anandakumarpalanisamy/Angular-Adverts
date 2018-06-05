import { Component, OnInit } from '@angular/core';
import { AdvertModel } from '../../core/models/advert.model';
import { AdvertsService } from '../shared/adverts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../core/providers/session.service';
import { UserModel } from '../../core/models/profile.model';

@Component({
  selector: 'app-adverts-edit',
  templateUrl: './adverts-edit.component.html',
  styleUrls: ['./adverts-edit.component.sass']
})
export class AdvertsEditComponent implements OnInit {

  public advertData: AdvertModel;

  constructor(private advertService: AdvertsService,private activeRouter: ActivatedRoute, private router: Router,
  private sessionService: SessionService ) {
    this.activeRouter.params.subscribe(params => {
      this.getSelectedAdvert(params['id']);

    });
  }

  getSelectedAdvert(id) {
    this.advertService.getAdvertById(id).subscribe(
      (data: AdvertModel) => {
        this.advertData = data;
        if((JSON.parse(localStorage.getItem('user_data')).id === data.owner.id)) {
          console.log('vladelec');
        } else {
          this.router.navigate([`/adverts/view/${data.pk}`]);
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  editAdvert(data) {
    console.log(data);
    this.advertService.editAdvert(data, this.advertData.pk).subscribe(
      (newAdvertData: AdvertModel) =>{
        this.router.navigate([`/adverts/view/${this.advertData.pk}`]);
      }, (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit() {
  }

}
