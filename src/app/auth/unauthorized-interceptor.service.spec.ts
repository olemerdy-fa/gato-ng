import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptor } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule,
        UnauthorizedInterceptor
      ]
    });
  });

  it('should be created', inject([UnauthorizedInterceptor], (service: UnauthorizedInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
