import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { CredentialsInterceptor } from './credentials-interceptor.service';

describe('CredentialsInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule,
        CredentialsInterceptor
      ]
    });
  });

  it('should be created', inject([CredentialsInterceptor], (service: CredentialsInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
