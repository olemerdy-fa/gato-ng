import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  subject: Subject<string>;

  constructor() {
    this.subject = new Subject();
  }

  get data(): Observable<string> {
    return this.subject;
  }
}
