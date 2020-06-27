import { TestBed } from '@angular/core/testing';

import { RecordsResolverService } from './records-resolver.service';

describe('RecordsResolverService', () => {
  let service: RecordsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
