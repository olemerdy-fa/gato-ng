import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ConfigService } from '../../core/config.service';
import { StuffDataSource } from '../stuff-data-source';

@Component({
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: DataSource<any[]>;

  columns = ['id', 'title', 'creationDate'];

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  ngOnInit() {
    this.dataSource = new StuffDataSource(this.config, this.http, this.paginator, this.sort);
  }

}
