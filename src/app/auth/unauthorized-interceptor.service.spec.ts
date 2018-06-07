import { inject, TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptor } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UnauthorizedInterceptor
      ]
    });
  });

  it('should be created', inject([UnauthorizedInterceptor], (service: UnauthorizedInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
