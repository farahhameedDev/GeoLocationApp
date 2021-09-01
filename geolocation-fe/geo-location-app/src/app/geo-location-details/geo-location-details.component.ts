import { Component, OnInit, Input } from '@angular/core';
import { GeoLocation } from '../geolocation';

@Component({
  selector: 'app-geo-location-details',
  templateUrl: './geo-location-details.component.html',
  styleUrls: ['./geo-location-details.component.css']
})
export class GeoLocationDetailsComponent implements OnInit {

  @Input() geoLocationDetail?: GeoLocation;
  constructor() { }

  ngOnInit(): void {
  }

}
