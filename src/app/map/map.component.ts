import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: L.Map;
  afiche: boolean = false;
  @Input() Coordinat:any;
  arryNumber: any = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const Coordinat = this.route.snapshot.params['Coordinat'];
    if (Coordinat != undefined) { 

      const arrayPosition = Coordinat.split(',')
      for (let i = 0; i < arrayPosition.length; i++) {
        const element = arrayPosition[i];
        if (this.arryNumber.length > 1) {
          this.arryNumber = [];
        }
        this.arryNumber.push(+element)
      }
      console.log(this.arryNumber);
      
      this.setMap(this.arryNumber);
    }
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
    //this.addMarker(Coordinat)
  }

  setCoordinat(Coordinat: number[]) {
    this.map.setView([Coordinat[1], Coordinat[0]], 10);
  }

  setMap(Coordinat: any) {
    this.afiche = true;
    setTimeout(()=>{
      if (this.map != undefined || this.map != null) {
        this.setCoordinat(Coordinat);
        //this.addMarker(Coordinat)
      } else {
        this.createMap(Coordinat);
      }
    },2)
  }
  // addMarker(coords : number[]) {
  //   const marker = L.marker([coords[1], coords[0]], { icon: this.smallIcon });
  //   marker.addTo(this.map);
  // }
}
