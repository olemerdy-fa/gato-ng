import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: new AuthStore(localStorage)
})
export class AuthStore {

  constructor(private backend) {
  }

  get accessToken(): string | null {
    return this.backend.getItem('access_token');
  }

  get idToken(): string | null {
    return this.backend.getItem('id_token');
  }

  get expiresAt(): number | null {
    return JSON.parse(this.backend.getItem('expires_at'));
  }

  clear(): void {
    this.backend.removeItem('access_token');
    this.backend.removeItem('id_token');
    this.backend.removeItem('expires_at');
  }

  store(authResult: { accessToken: string, idToken: string, expiresAt: number }): void {
    const {accessToken, idToken, expiresAt} = authResult;
    this.backend.setItem('access_token', accessToken);
    this.backend.setItem('id_token', idToken);
    this.backend.setItem('expires_at', JSON.stringify(expiresAt));
  }
}
