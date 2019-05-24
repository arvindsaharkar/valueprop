import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpChartComponent } from './vp-chart.component';

describe('VpChartComponent', () => {
  let component: VpChartComponent;
  let fixture: ComponentFixture<VpChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
