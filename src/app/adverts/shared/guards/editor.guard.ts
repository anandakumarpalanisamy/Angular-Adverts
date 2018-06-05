import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../../core/providers/session.service';
import { map } from 'rxjs/operators';
import { UserModel } from '../../../core/models/profile.model';

@Injectable()
export class EditorGuard implements CanActivate {

  constructor(private sessionService: SessionService, private activeRouter: ActivatedRoute) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.sessionService.user.pipe(
        map(
          (user: UserModel) => {
            
          //  return user.id === 
          }
        )
      )
    }
}
