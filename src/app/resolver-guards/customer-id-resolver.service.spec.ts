import { TestBed } from '@angular/core/testing';

import { CustomerIdResolverService } from './customer-id-resolver.service';

describe('CustomerIdResolverService', () => {
  let service: CustomerIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
