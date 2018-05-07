import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {

  values: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`${environment.apiEndpoint}stuff`)
      .subscribe(res => {
        this.values = res as any[];
      });
  }

}
