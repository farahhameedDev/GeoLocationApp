import { Injectable } from '@angular/core';
import { GeoLocation } from './geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeoLocationService {
  private geoLocationUrl = 'https://localhost:44393/geoLocation';  // URL to web api
    constructor(
      private http: HttpClient) { }

    getGeoLocation(clientLocation: string, inputLocation: string): Observable<Geolocation[]> {
      const url = `${this.geoLocationUrl}?clientLocation=${clientLocation}&&inputLocation=${inputLocation}`;
      return this.http.get<Geolocation[]>(url);
    }

}
