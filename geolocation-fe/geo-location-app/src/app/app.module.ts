import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoLocationDetailsComponent } from './geo-location-details/geo-location-details.component';
import { GeoLocationDifferenceComponent } from './geo-location-difference/geo-location-difference.component';
import { HttpClientModule } from "@angular/common/http";  

@NgModule({
  declarations: [
    AppComponent,
    GeoLocationDetailsComponent,
    GeoLocationDifferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
