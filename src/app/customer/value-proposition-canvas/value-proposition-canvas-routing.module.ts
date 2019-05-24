import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValuePropositionCanvasComponent } from './value-proposition-canvas.component';
import { ValuePropositionEditComponent } from './value-proposition-edit/value-proposition-edit.component';
import { ValuePropositionDetailsComponent } from './value-proposition-details/value-proposition-details.component';
import { VpProductsComponent } from './value-proposition-details/vp-products/vp-products.component';
import { VpProductEditComponent } from './value-proposition-details/vp-products/vp-product-edit/vp-product-edit.component';
import { VpChartComponent } from './vp-chart/vp-chart.component';



const vpRoutes: Routes = [
  { path: '',  component: ValuePropositionCanvasComponent },
  { path: 'edit/:vpId',  component: ValuePropositionEditComponent , data: { breadcrumb: 'Edit Value Proposition'} },
  { path: ':vpId',  component: ValuePropositionDetailsComponent, data: { breadcrumb: 'Value Proposition details'} },
  { path: ':vpId/chart',  component: VpChartComponent, data: { breadcrumb: 'Segment', bgColor: 'bg-white'} },
  { path: ':vpId/:segmentName',  component: VpProductsComponent, data: { breadcrumb: 'Segment'} },
  { path: ':vpId/:segmentName/edit/:vppId',  component: VpProductEditComponent, data: { breadcrumb: 'Edit Segment'} },

];

@NgModule({
  imports: [
    RouterModule.forChild(vpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ValuePropositionCanvasRoutingModule { }
