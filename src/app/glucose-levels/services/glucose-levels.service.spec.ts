import { TestBed } from '@angular/core/testing';

import { GlucoseLevelsService } from './glucose-levels.service';

describe('GlucoseLevelsService', () => {
  let service: GlucoseLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlucoseLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
