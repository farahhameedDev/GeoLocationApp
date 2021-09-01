# GeoLocationApp



## geo-location-be
This folder contains code for Backend service. The backend rest api is developed using .Net core 5.0 and visual studio 2019.

This service communicates with a third-party service https://ipgeolocation.io/ and finds the details for provided ip addresses. 
The details for hostname are only available for paid subscription. 

Go to GeoLocationService.cs file -> update the 'APIKey' if you want to use your account of  https://ipgeolocation.io/.

## geo-location-fe
This folder contains code for Frontend application. 
This application is developed using:

Angular CLI: 12.2.3
Node: 12.20.1
Package Manager: npm 6.14.10

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
