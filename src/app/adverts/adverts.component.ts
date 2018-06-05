import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../core/providers/session.service';
import { UserModel } from '../core/models/profile.model';
import { Subscription } from 'rxjs';
import { AdvertsService } from './shared/adverts.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.sass']
})
export class AdvertsComponent implements OnInit, OnDestroy {

  private userDataSubscriber$: Subscription;

  constructor(private sessionService: SessionService, private advertsService: AdvertsService) {
    this.userDataSubscriber$ = this.sessionService.userData.subscribe(
      (data) => {
        // console.log(data);
      }
    );
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.userDataSubscriber$.unsubscribe();
  }

}
