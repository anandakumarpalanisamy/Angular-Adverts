
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,
         HttpInterceptor, HttpHandler,
         HttpRequest, HttpErrorResponse,
         HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
intercept (reqest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const contentTypeName = 'Content-Type';
      if ( localStorage.getItem('auth_token') !== null) {
        reqest = reqest.clone({
            setHeaders: {
                Authorization: localStorage.getItem('auth_token'),
                Accept: 'application/json'
            }
        });
      } else {
        reqest = reqest.clone({
            setHeaders: {
                Accept: 'application/json'
            }
        });
      }
    return next.handle(reqest);
  }
}
