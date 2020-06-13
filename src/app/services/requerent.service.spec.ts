import { TestBed } from '@angular/core/testing';

import { RequerentService } from './requerent.service';

describe('RequerentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequerentService = TestBed.get(RequerentService);
    expect(service).toBeTruthy();
  });
});
