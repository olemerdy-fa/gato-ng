import { TestBed, inject } from '@angular/core/testing';

import { AuthStore } from './auth-store.service';

describe('AuthStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthStore]
    });
  });

  it('should be created', inject([AuthStore], (service: AuthStore) => {
    expect(service).toBeTruthy();
  }));
});
