import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class StuffDataSource extends DataSource<any> {

  constructor(private http: HttpClient, private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiEndpoint}stuff`);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
