import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
//import { APP_BASE_HREF } from '@angular/common';
// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/pt';
// registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `http://my-api/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel
    })

  ],
  // providers: [
  //   {provide:APP_BASE_HREF, useValue:'/'}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }