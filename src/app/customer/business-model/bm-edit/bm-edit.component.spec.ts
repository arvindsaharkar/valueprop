import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmEditComponent } from './bm-edit.component';

describe('BmEditComponent', () => {
  let component: BmEditComponent;
  let fixture: ComponentFixture<BmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
