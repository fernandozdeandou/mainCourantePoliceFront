import { TestBed } from '@angular/core/testing';

import { PersonnelsService } from './personnels.service';

describe('PersonnelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonnelsService = TestBed.get(PersonnelsService);
    expect(service).toBeTruthy();
  });
});
s