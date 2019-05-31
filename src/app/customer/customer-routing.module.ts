import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValuePropositionCanvasComponent } from './value-proposition-canvas/value-proposition-canvas.component';
import { CustomerComponent } from '../customer/customer.component';
import { BusinessModelComponent } from './business-model/business-model.component';


const customersRoutes: Routes = [
  { path: '',  component: CustomerComponent, data: { breadcrumb: 'customer'} }
];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
