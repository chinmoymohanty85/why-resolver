import { TestBed } from '@angular/core/testing';

import { DelayInterceptor } from './delay.interceptor';

describe('DelayInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DelayInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DelayInterceptor = TestBed.inject(DelayInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
