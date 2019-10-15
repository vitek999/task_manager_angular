import { TestBed } from '@angular/core/testing';

import { SubdivisionService } from './subdivision.service';

describe('SubdivisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubdivisionService = TestBed.get(SubdivisionService);
    expect(service).toBeTruthy();
  });
});
