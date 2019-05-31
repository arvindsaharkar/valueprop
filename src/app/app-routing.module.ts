import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BusinessModelComponent } from './customer/business-model/business-model.component';
import { BmEditComponent } from './customer/business-model/bm-edit/bm-edit.component';
import { BmChartComponent } from './customer/business-model/bm-chart/bm-chart.component';
import { ValuePropositionCanvasComponent } from './customer/value-proposition-canvas/value-proposition-canvas.component';

const routes: Routes = [
  { path: '', component: CustomerComponent, data: { breadcrumb: ''} },
  { path: 'vp',  component: ValuePropositionCanvasComponent, data: { breadcrumb: 'Value Proposition'} },
  { path: 'bm',  component: BusinessModelComponent, data: { breadcrumb: 'Business Model'} },
  { path: 'bm/:bmId',  component: BmEditComponent, data: { breadcrumb: 'Business Model - Edit'} },
  { path: 'bm/:bmId/chart',  component: BmChartComponent, data: { breadcrumb: 'Business Model - Chart'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
