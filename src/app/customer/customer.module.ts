import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValuePropositionCanvasModule } from './value-proposition-canvas/value-proposition-canvas.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from '../customer/customer.component';
import { BusinessModelComponent } from './business-model/business-model.component';

@NgModule({
  declarations: [
    CustomerComponent,
    BusinessModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValuePropositionCanvasModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
