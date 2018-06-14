import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { finalize, flatMap } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';

export class StuffDataSource extends DataSource<any> {

  private loadingSub: Subject<boolean>;

  loading: Observable<boolean>;

  constructor(private config: ConfigService, private http: HttpClient, private paginator: MatPaginator, private sort: MatSort) {
    super();
    this.loadingSub = new BehaviorSubject<boolean>(false);
    this.loading = this.loadingSub.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    this.loadingSub.next(true);
    return this.config.data.pipe(
      flatMap(config => this.http.get<any[]>(`${config.apiEndpoint}stuff`)),
      finalize(() => this.loadingSub.next(false))
    );
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
