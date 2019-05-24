import { TestBed } from '@angular/core/testing';

import { ChartbgService } from './chartbg.service';

describe('ChartbgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartbgService = TestBed.get(ChartbgService);
    expect(service).toBeTruthy();
  });
});
