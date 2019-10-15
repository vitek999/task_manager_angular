import { TestBed } from '@angular/core/testing';

import { ImportanceLevelService } from './importance-level.service';

describe('ImportanceLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportanceLevelService = TestBed.get(ImportanceLevelService);
    expect(service).toBeTruthy();
  });
});
