import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoLocationDetailsComponent } from './geo-location-details/geo-location-details.component';
import { GeoLocationDifferenceComponent } from './geo-location-difference/geo-location-difference.component';
import { HttpClientModule } from "@angular/common/http";  
import {  } from '@angular/material';

 import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
 
@NgModule({
  declarations: [
    AppComponent,
    GeoLocationDetailsComponent,
    GeoLocationDifferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
