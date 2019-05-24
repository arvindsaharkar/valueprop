import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePropositionEditComponent } from './value-proposition-edit.component';

describe('ValuePropositionEditComponent', () => {
  let component: ValuePropositionEditComponent;
  let fixture: ComponentFixture<ValuePropositionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePropositionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuePropositionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
