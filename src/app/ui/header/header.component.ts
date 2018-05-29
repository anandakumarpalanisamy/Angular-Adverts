import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../../core/providers/session.service';
import { UserModel } from '../../core/models/profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userData: UserModel;

  constructor(private sessionService: SessionService) { 
    this.sessionService.userData.subscribe(
      (data) => {
        this.userData = data;
      }
    )
    this.sessionService.emitLogout.subscribe(
      (data) => {
        this.logoutUser();
      }
    );
  }

  private logoutUser() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    this.sessionService.userData.next(null);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sessionService.userData.unsubscribe();
  }

}
