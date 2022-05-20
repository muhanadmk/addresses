import { Component, Input, OnInit } from '@angular/core';
import { GeoApiGouvAddressFeatureCollection, GeoApiGouvAddressResponse, GeoApiGouvAddressService } from '@placeme/ngx-geo-api-gouv-address';

@Component({
  selector: 'app-input-recherche',
  templateUrl: './input-recherche.component.html',
  styleUrls: ['./input-recherche.component.css']
})
export class InputRechercheComponent implements OnInit {
  search: string;
  @Input() t: string;
  geoAddressFeatureCollections: any[];

  constructor(
    private geoApiGouvAddressService: GeoApiGouvAddressService) {
  }
  ngOnInit(): void {
  }
  onSubmitForm(): void {
    this.getLocation(this.search)
  }

  getLocation(address: string): GeoApiGouvAddressFeatureCollection[] {
    this.geoApiGouvAddressService
      .query({q: address})
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        this.geoAddressFeatureCollections = geoApiGouvAddressResponse.features;
      });
    return this.geoAddressFeatureCollections;
  }
  vidderInput(): void {
    this.search = '';
  }
}
