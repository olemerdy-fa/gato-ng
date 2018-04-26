import { TestBed, inject } from '@angular/core/testing';

import { CredentialsInterceptor } from './credentials-interceptor.service';

describe('CredentialsInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialsInterceptor]
    });
  });

  it('should be created', inject([CredentialsInterceptor], (service: CredentialsInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
