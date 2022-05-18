import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultats-address',
  templateUrl: './resultats-address.component.html',
  styleUrls: ['./resultats-address.component.css']
})
export class ResultatsAddressComponent implements OnInit {
  search: string;
  @Input() geoAddressFeatureCollections: any;
  //onAdderess: any;
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
 setMap(coordinates : any) :void{
  this.router.navigateByUrl(`map/${coordinates}`);
 }

}
