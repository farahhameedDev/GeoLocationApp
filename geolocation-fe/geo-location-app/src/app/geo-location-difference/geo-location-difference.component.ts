import { Component, Input, OnInit } from '@angular/core';
import { IpServiceService } from '../ip-service.service';
import { GeoLocationService } from '../geo-location.service';
import { GeoLocation } from '../geolocation';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-geo-location-difference',
  templateUrl: './geo-location-difference.component.html',
  styleUrls: ['./geo-location-difference.component.css']
})
export class GeoLocationDifferenceComponent implements OnInit {

  @Input() ipAddress?: string;
  clientLocation!: GeoLocation;
  inputLocation!: GeoLocation;
  clientIpAddress: string;
  totalHoursDifference: number = 0;

  constructor(private ipService: IpServiceService, private geoLocationService: GeoLocationService ) {
    this.clientIpAddress = "";
   }

  ngOnInit(): void {

  }

  getdetails(){
    this.ipService.getIPAddress().subscribe((res:any)=>{  
      this.clientIpAddress=res.ip;
      this.geoLocationService.getGeoLocation(this.clientIpAddress, this.ipAddress as string).subscribe((res: any) =>{
        if (res.length > 0) {
          this.clientLocation = res[0];
          this.inputLocation = res[1];
  
          this.totalHoursDifference = this.getTimeZoneOffSet();
        }
      });
    }); 
  }

  getTimeZoneOffSet() : number {
      var clientOffsetMoment = moment(this.clientLocation.localTime);
      clientOffsetMoment.tz(this.clientLocation.timeZone);
      var localOffset = clientOffsetMoment.utcOffset();
      var inputOffsetMoment  = moment(this.inputLocation.localTime);
      inputOffsetMoment.tz(this.inputLocation.timeZone);
      var inputOffset = inputOffsetMoment.utcOffset();
      var diffInMinutes = (localOffset - inputOffset);
      var hours = Math.floor(diffInMinutes / 60);
      return hours;
    }
  }

  


