import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {GeoApiGouvAddressModule} from "@placeme/ngx-geo-api-gouv-address";
import {FormsModule} from "@angular/forms";
import { FeaturesComponent } from './features/features.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { InputRechercheComponent } from './input-recherche/input-recherche.component';
import { MapComponent } from './map/map.component';
import { ResultatsAddressComponent } from './resultats-address/resultats-address.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HeaderComponent,
    InputRechercheComponent,
    MapComponent,
    ResultatsAddressComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    GeoApiGouvAddressModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
