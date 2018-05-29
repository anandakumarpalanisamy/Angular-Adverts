import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  public userData = new BehaviorSubject(null);
  public emitLogout = new Subject();

  constructor(private router: Router) {
    this.userData.next(JSON.parse(localStorage.getItem('user_data')));
  }

  private setStrageData(data, key) {
      localStorage.setItem(key, JSON.stringify(data));
  }

  private getStrageData(key) {
    return Observable.create( (observer) => {
      const data = localStorage.getItem(key);
      observer.next(JSON.parse(data));
      observer.complete();
    });
  }

  get token() {
    return this.getStrageData('auth_token');
  }

  get loginStatus() {
    return this.token;
  }

  public setToken(data) {
    return this.setStrageData(data, 'auth_token');
  }

  public setUser(data) {
    this.userData.next(data);
    return this.setStrageData(data, 'user_data');
  }
  
}
