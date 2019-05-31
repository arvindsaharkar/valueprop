import { TestBed } from '@angular/core/testing';

import { BmChartService } from './bm-chart.service';

describe('BmChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmChartService = TestBed.get(BmChartService);
    expect(service).toBeTruthy();
  });
});
