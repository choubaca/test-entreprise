import { TestBed } from '@angular/core/testing';

import { JwtInterceptorService } from './jwt.interceptor.service';

describe('Jwt.InterceptorService', () => {
  let service: JwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
