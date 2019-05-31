import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmEditComponent } from './bm-edit/bm-edit.component';
import { BmChartComponent } from './bm-chart/bm-chart.component';

@NgModule({
  declarations: [BmEditComponent, BmChartComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessModelModule { }
