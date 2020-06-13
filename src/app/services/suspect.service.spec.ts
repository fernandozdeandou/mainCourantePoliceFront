import { TestBed } from '@angular/core/testing';

import { SuspectService } from './suspect.service';

describe('SuspectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuspectService = TestBed.get(SuspectService);
    expect(service).toBeTruthy();
  });
});
