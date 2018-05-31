import { Component, OnInit, Input } from '@angular/core';
import { AdvertModel } from '../../../core/models/advert.model';

@Component({
  selector: 'app-advert-edit-form',
  templateUrl: './advert-edit-form.component.html',
  styleUrls: ['./advert-edit-form.component.sass']
})
export class AdvertEditFormComponent implements OnInit {

  @Input() advertData: AdvertModel;
  
  constructor() {
    console.log(this.advertData);  
  }

  ngOnInit() {
  }

}
