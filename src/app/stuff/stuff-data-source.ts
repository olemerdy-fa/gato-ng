import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';

export class StuffDataSource extends DataSource<any> {

  constructor(private config: ConfigService, private http: HttpClient, private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.config.data.pipe(
      flatMap(config => this.http.get<any[]>(`${config.apiEndpoint}stuff`))
    );
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
