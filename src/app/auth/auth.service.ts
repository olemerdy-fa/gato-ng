import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'pzwuSOVtcMkwW6vom2uKiLmxxk6d1hdx',
    domain: 'olemerdy-fa.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://gato-api.herokuapp.com/',
    redirectUri: environment.authCallbackUrl,
    scope: 'openid profile'
  });

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/'], {relativeTo: this.route.parent});
      } else if (err) {
        this.router.navigate(['/'], {relativeTo: this.route.parent});
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
