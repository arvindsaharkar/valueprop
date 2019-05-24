import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValuePropositionCanvasComponent } from './customer/value-proposition-canvas/value-proposition-canvas.component';

const routes: Routes = [
  { path: '', component: ValuePropositionCanvasComponent, data: { breadcrumb: ''} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
