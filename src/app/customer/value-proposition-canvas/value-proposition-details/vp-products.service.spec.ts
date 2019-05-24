import { TestBed } from '@angular/core/testing';

import { VpProductsService } from './vp-products.service';

describe('VpProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VpProductsService = TestBed.get(VpProductsService);
    expect(service).toBeTruthy();
  });
});
