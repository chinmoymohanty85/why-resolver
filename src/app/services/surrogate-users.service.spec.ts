import { TestBed } from '@angular/core/testing';

import { SurrogateUsersService } from './surrogate-users.service';

describe('SurrogateUsersService', () => {
  let service: SurrogateUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurrogateUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
