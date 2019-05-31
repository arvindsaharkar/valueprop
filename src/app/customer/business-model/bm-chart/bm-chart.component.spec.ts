import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmChartComponent } from './bm-chart.component';

describe('BmChartComponent', () => {
  let component: BmChartComponent;
  let fixture: ComponentFixture<BmChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
