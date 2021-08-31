import { Injectable } from '@angular/core';
import { GeoLocation } from './geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GeoLocationService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(
    private http: HttpClient) { }


  }