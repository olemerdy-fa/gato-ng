import { Observable } from 'rxjs';

export interface Loadable {
  loading: Observable<boolean>;
}
