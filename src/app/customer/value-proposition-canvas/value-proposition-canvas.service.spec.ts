import { TestBed } from '@angular/core/testing';

import { ValuePropositionCanvasService } from './value-proposition-canvas.service';

describe('ValuePropositionCanvasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuePropositionCanvasService = TestBed.get(ValuePropositionCanvasService);
    expect(service).toBeTruthy();
  });
});
