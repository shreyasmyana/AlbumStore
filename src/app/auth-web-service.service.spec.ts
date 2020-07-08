import { TestBed } from '@angular/core/testing';

import { AuthWebServiceService } from './auth-web-service.service';

describe('AuthWebServiceService', () => {
  let service: AuthWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
