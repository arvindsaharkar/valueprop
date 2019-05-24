import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValuePropositionCanvasRoutingModule } from './value-proposition-canvas-routing.module';

import { ValuePropositionEditComponent } from './value-proposition-edit/value-proposition-edit.component';
import { ValuePropositionDetailsComponent } from './value-proposition-details/value-proposition-details.component';
import { VpProductsComponent } from './value-proposition-details/vp-products/vp-products.component';
import { VpProductEditComponent } from './value-proposition-details/vp-products/vp-product-edit/vp-product-edit.component';
import { VpChartComponent } from './vp-chart/vp-chart.component';



@NgModule({
  declarations: [
    ValuePropositionEditComponent,
    ValuePropositionDetailsComponent,
    VpProductEditComponent,
    VpProductsComponent,
    VpChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValuePropositionCanvasRoutingModule
  ]
})
export class ValuePropositionCanvasModule { }
