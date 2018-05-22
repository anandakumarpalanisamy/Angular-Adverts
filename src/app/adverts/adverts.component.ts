import { Component, OnInit } from '@angular/core';
import { SessionService } from '../core/providers/session.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.sass']
})
export class AdvertsComponent implements OnInit {

  constructor(private sessionService: SessionService) {
    this.sessionService.userData.subscribe(
      (data) => {
        console.log(data);
      }
    );  
  }

  ngOnInit() {
  }
  
}
