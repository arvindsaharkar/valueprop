import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpProductEditComponent } from './vp-product-edit.component';

describe('VpProductEditComponent', () => {
  let component: VpProductEditComponent;
  let fixture: ComponentFixture<VpProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
