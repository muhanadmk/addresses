import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeoApiGouvAddressFeatureCollection, GeoApiGouvAddressResponse, GeoApiGouvAddressService } from '@placeme/ngx-geo-api-gouv-address';
import { FormControl, FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { LatLng, LatLngLiteral } from "leaflet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Addresses';
  search: string;
  geoAddressFeatureCollections: any[];
  private map: L.Map;
  arryNumber: number[] = [];
  selectADress: string;

  constructor(
    private geoApiGouvAddressService: GeoApiGouvAddressService) {
  }

  ngOnInit(): void {
  }

  onGetLocation(search: string): void {
    this.getLocation(search);
  }

  onSubmitForm(): void {
    this.onGetLocation(this.search)
  }

  getLocation(address: string): GeoApiGouvAddressFeatureCollection[] {
    this.geoApiGouvAddressService
      .query({q: address})
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        this.geoAddressFeatureCollections = geoApiGouvAddressResponse.features;
      });
    return this.geoAddressFeatureCollections;
  }


  selectChangeHandler(event: any) {
    this.arryNumber = []
    this.selectADress = event.target.value;
    const arrayPosition = this.selectADress.split(',')
    for (let i = 0; i < arrayPosition.length; i++) {
      const element = arrayPosition[i];
      this.arryNumber.push(+element)
    }
  }

  createMap(arrayPosition: number[]): void {
    let parcThabor = {
      lng: arrayPosition[0],
      lat: arrayPosition[1]
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
    //LatLng LatLngLiteral
    mainMayer.addTo(this.map)
  }

  setCoordinat(arrayPosition: number[]) {
    this.map.setView([arrayPosition[1], arrayPosition[0]], 10);
  }

  setMap(value: any) {
    console.log(value);
    this.arryNumber = []
    this.selectADress = value;
    const arrayPosition = this.selectADress
    for (let i = 0; i < arrayPosition.length; i++) {
      const element = arrayPosition[i];
      this.arryNumber.push(+element)
    }
    if (this.arryNumber != undefined) {
      if (this.map != undefined || this.map != null) {
        this.setCoordinat(this.arryNumber)
      } else {
        console.log('map cree')
        this.createMap(this.arryNumber);
      }
    }
  }

}
