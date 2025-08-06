import { TestBed } from '@angular/core/testing';

import { RouteHelper } from './route-helper';

describe('RouteHelper', () => {
  let service: RouteHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
