import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from '../../environments/environment';
import { AuthStore } from './auth-store.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'pzwuSOVtcMkwW6vom2uKiLmxxk6d1hdx',
    domain: 'olemerdy-fa.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://gato-api.herokuapp.com/',
    redirectUri: environment.authCallbackUrl,
    scope: 'openid'
  });

  constructor(private router: Router, private store: AuthStore) {
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.store.store({
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          expiresAt: authResult.expiresIn * 1000 + new Date().getTime()
        });
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  isAuthenticated(): boolean {
    return new Date().getTime() < this.store.expiresAt;
  }

  login(): void {
    this.auth0.authorize();
  }

  logout(): void {
    // Remove tokens and expiry time from localStorage
    this.store.clear();
    // Go back to the home route
    this.router.navigate(['/']);
  }

  get access_token(): string | null {
    return this.store.accessToken;
  }

}
