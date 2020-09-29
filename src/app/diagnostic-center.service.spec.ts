import { TestBed } from '@angular/core/testing';

import { DiagnosticCenterService } from './diagnostic-center.service';

describe('DiagnosticCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticCenterService = TestBed.get(DiagnosticCenterService);
    expect(service).toBeTruthy();
  });
});
