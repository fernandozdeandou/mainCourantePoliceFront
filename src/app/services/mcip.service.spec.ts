import { TestBed } from '@angular/core/testing';

import { McipService } from './mcip.service';

describe('McipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McipService = TestBed.get(McipService);
    expect(service).toBeTruthy();
  });
});
