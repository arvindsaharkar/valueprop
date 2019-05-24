import { ValuePropositionCanvasModule } from './customer/value-proposition-canvas/value-proposition-canvas.module';
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
import { ValuePropositionCanvasComponent } from './customer/value-proposition-canvas/value-proposition-canvas.component';
import { AppGlobal } from './shared/app.global';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuePropositionCanvasComponent,
    AlertComponent
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
