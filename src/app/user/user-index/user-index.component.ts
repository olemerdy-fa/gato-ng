import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';

@Component({
  templateUrl: './user-index.component.html'
})
export class UserIndexComponent implements OnInit {

  user: Observable<any>;

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  ngOnInit() {
    this.user = this.config.data.pipe(
      flatMap(config => this.http.get<any>(`${config.apiEndpoint}user`))
    );
  }

}
