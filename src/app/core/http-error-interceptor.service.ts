import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errors: ErrorsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        switch (err.status) {
          case 0:
          case 503:
            this.errors.subject.next(err.message);
            return EMPTY;
          default:
            return throwError(err);
        }
      }));
  }
}
