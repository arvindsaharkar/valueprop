import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppGlobal } from './shared/app.global';
import { CustomerComponent } from './customer/customer.component';
import { BusinessModelComponent } from './customer/business-model/business-model.component';
import { ValuePropositionCanvasModule } from './customer/value-proposition-canvas/value-proposition-canvas.module';
import { BmEditComponent } from './customer/business-model/bm-edit/bm-edit.component';
import { BmChartComponent } from './customer/business-model/bm-chart/bm-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BusinessModelComponent,
    BmEditComponent,
    BmChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ValuePropositionCanvasModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpClient, AppGlobal],
  bootstrap: [AppComponent]
})
export class AppModule { }
