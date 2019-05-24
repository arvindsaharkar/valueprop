import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePropositionDetailsComponent } from './value-proposition-details.component';

describe('ValuePropositionDetailsComponent', () => {
  let component: ValuePropositionDetailsComponent;
  let fixture: ComponentFixture<ValuePropositionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePropositionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuePropositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
