import { TestBed } from '@angular/core/testing';

import { AcademiaserviceService } from './academiaservice.service';

describe('AcademiaserviceService', () => {
  let service: AcademiaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademiaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
