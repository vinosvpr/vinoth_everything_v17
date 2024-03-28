import { TestBed } from '@angular/core/testing';

import { GradeValidatorService } from './grade-validator.service';

describe('GradeValidatorService', () => {
  let service: GradeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
