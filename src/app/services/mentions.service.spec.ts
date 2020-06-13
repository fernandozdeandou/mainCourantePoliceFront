import { TestBed } from '@angular/core/testing';

import { MentionsService } from './mentions.service';

describe('MentionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentionsService = TestBed.get(MentionsService);
    expect(service).toBeTruthy();
  });
});
