import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {GeoApiGouvAddressModule} from "@placeme/ngx-geo-api-gouv-address";
import {FormsModule} from "@angular/forms";
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    GeoApiGouvAddressModule.forRoot(),
    FormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
