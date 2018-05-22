import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SessionService {

  public userData = new BehaviorSubject(null); 

  constructor() { }

  private setStrageData(data, key) {
      localStorage.setItem(key, JSON.stringify(data));
  };

  private getStrageData(key) {
    return Observable.create( (observer) => {
      const data = localStorage.getItem(key);
      observer.next(JSON.parse(data));
      observer.complete();
    });
  };

  get token() {
    return this.getStrageData('auth_token');
  }

  public setToken(data) {
    return this.setStrageData(data, 'auth_token');
  }

  public setUser(data) {
    this.userData.next(data);
    return this.setStrageData(data, 'user_data');
  }

}
