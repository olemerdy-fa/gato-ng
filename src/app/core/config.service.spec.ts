import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    http = TestBed.get(HttpTestingController);
  });

  it('should equal base config if no override', (done: DoneFn) => {
    const service = TestBed.get(ConfigService);
    service.data.subscribe(config => {
      expect(config.apiEndpoint).toEqual('');
      expect(config.authCallbackUrl).toEqual('');
      done();
    });
    const req = http.expectOne('/config/environment.dev.json');
    expect(req.request.method).toEqual('GET');
    req.flush({});
    http.verify();
  });

  it('should equal overridden config', (done: DoneFn) => {
    const service = TestBed.get(ConfigService);
    service.data.subscribe(config => {
      expect(config.apiEndpoint).toEqual('https://google.com/');
      expect(config.authCallbackUrl).toEqual('http://localhost:4200/auth/callback');
      done();
    });
    const req = http.expectOne('/config/environment.dev.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      apiEndpoint: 'https://google.com/',
      authCallbackUrl: 'http://localhost:4200/auth/callback'
    });
    http.verify();
  });

  afterEach(() => {
    http.verify();
  });
});
