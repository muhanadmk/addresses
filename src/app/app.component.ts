import { Component, OnInit } from '@angular/core';
import { GeoApiGouvAddressFeatureCollection, GeoApiGouvAddressResponse, GeoApiGouvAddressService } from '@placeme/ngx-geo-api-gouv-address';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Addresses';

  constructor(){}

  ngOnInit(): void {
  }

}
