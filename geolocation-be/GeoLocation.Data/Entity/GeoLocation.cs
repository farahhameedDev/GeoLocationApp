using System;
using System.Collections.Generic;
using System.Text;

namespace GeoLocationApp.Service.Entity
{
    public class GeoLocation
    {
        public string IPAddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string TimeZone { get; set; }
        public string LocalTime { get; set; }
    }
}
