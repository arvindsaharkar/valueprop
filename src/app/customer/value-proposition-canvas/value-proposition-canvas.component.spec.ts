import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePropositionCanvasComponent } from './value-proposition-canvas.component';

describe('ValuePropositionCanvasComponent', () => {
  let component: ValuePropositionCanvasComponent;
  let fixture: ComponentFixture<ValuePropositionCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePropositionCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuePropositionCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
