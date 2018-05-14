import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuth = this.auth.isAuthenticated();
    const token = this.auth.access_token;
    const authRequest = isAuth && token ? req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    }) : req;
    return next.handle(authRequest);
  }

}
