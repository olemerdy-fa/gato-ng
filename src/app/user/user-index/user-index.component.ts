import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: './user-index.component.html'
})
export class UserIndexComponent implements OnInit {

  user: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.user = this.http.get<any>(`${environment.apiEndpoint}user`);
  }

}
