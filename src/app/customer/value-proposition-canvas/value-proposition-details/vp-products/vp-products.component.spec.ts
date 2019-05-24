import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpProductsComponent } from './vp-products.component';

describe('VpProductsComponent', () => {
  let component: VpProductsComponent;
  let fixture: ComponentFixture<VpProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
