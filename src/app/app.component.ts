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
  search: string;
  geoAddressFeatureCollections: any[];
  map: L.Map;
  afiche: boolean = false;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

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

  createMap(Coordinat: number[]): void {
    let parcThabor = {
      lng: Coordinat[0],
      lat: Coordinat[1]
    };

    const zommeLevel = 10;

    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zommeLevel,
    })
    const mainMayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 4,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    mainMayer.addTo(this.map)
    this.addMarker(Coordinat)
  }

  setCoordinat(Coordinat: number[]) {
    this.map.setView([Coordinat[1], Coordinat[0]], 10);
  }

  setMap(Coordinat: any) {
    this.afiche = true;
    setTimeout(()=>{
      if (this.map != undefined || this.map != null) {
        this.setCoordinat(Coordinat);
        this.addMarker(Coordinat)
      } else {
        this.createMap(Coordinat);
      }
    },2)

  }
  addMarker(coords : number[]) {
    const marker = L.marker([coords[1], coords[0]], { icon: this.smallIcon });
    marker.addTo(this.map);
  }
}
