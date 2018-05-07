import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {

  columns = ['id', 'title', 'creationDate'];

  values: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.values = this.http.get<any[]>(`${environment.apiEndpoint}stuff`);
  }

}
