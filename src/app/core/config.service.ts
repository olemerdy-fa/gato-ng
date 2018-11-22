import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Config {
  apiEndpoint: string;
  authCallbackUrl: string;
  auth0Audience: string;
  auth0ClientId: string;
  auth0Domain: string;
}

const baseConfig: Config = {
  apiEndpoint: '/api/',
  authCallbackUrl: '',
  auth0Audience: 'https://gato-api.herokuapp.com/',
  auth0ClientId: 'pzwuSOVtcMkwW6vom2uKiLmxxk6d1hdx',
  auth0Domain: 'olemerdy-fa.eu.auth0.com',
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Observable<Config>;

  constructor(private http: HttpClient) {
    this.data = this.http
      .get<Config>(`./config/${environment.configFile}`)
      .pipe(
        map(config => Object.assign({}, baseConfig, config)),
        shareReplay(1)
      );
  }
}
