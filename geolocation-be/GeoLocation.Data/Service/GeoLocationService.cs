using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using GeoLocationApp.Service.Entity;
using GeoLocationApp.Service.IService;
using Newtonsoft.Json;
using System.Net;
using IPGeolocation;

namespace GeoLocationApp.Service
{
    public class GeoLocationService : IGeoLocationService
    {
        const string APIKey = "792d1b8cea0a49bca2b95afe0c8cd230";

        public async Task<List<GeoLocation>> GetGeoLocationDetails(string[] locations)
        {
            IPGeolocationAPI apiGeoLocation = new IPGeolocationAPI(APIKey);
            List<GeoLocation> geoLocations = new List<GeoLocation>();
            try
            {
                foreach (string location in locations)
                {
                    GeolocationParams geolocationParams = new GeolocationParams();
                    geolocationParams.SetIPAddress(location);
                    IPGeolocation.Geolocation geoLocationResponse = await Task.Run(() =>
                            apiGeoLocation.GetGeolocation(geolocationParams));
                    GeoLocation geoLocation = new GeoLocation();
                    if (geoLocationResponse.GetStatus() == 200)
                    {
                        geoLocation.Country = geoLocationResponse.GetCountryName();
                        geoLocation.City = geoLocationResponse.GetCity();
                        geoLocation.IPAddress = geoLocationResponse.GetIPAddress();
                        geoLocation.LocalTime = geoLocationResponse.GetTimezone().GetCurrentTime();
                        geoLocation.TimeZone = geoLocationResponse.GetTimezone().GetName();
                    }
                    geoLocations.Add(geoLocation);

                }
            }
            catch (Exception ex)
            {
                
            }
            return geoLocations;

        }

    }
}
