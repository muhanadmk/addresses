import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-resultats-address',
  templateUrl: './resultats-address.component.html',
  styleUrls: ['./resultats-address.component.css']
})
export class ResultatsAddressComponent implements OnInit {
  @ViewChild("mapComponent") mapComponent: MapComponent;
  search: string;
  aficheMap: boolean = false;
  coordinates: string;
  @Input() geoAddressFeatureCollections: any;
  //onAdderess: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

 setMap(coordinates : any) :void{
  this.aficheMap = true;
  this.coordinates = coordinates;
  this.mapComponent.setMap(coordinates);
 }

}
