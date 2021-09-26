import { TestBed } from '@angular/core/testing';

import { GlucoseLevelsService } from './glucose-levels.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GlucoseLevelsService', () => {
  let service: GlucoseLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GlucoseLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
