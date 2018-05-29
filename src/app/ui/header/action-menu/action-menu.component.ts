import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../core/providers/session.service';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.sass']
})
export class ActionMenuComponent implements OnInit {

  constructor(private sessionService : SessionService) { }

  logoutUser() {
    this.sessionService.emitLogout.next();
  }

  ngOnInit() {
  }

}
