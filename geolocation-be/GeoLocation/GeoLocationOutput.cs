using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeoLocationApp
{
    public class GeoLocationOutput
    {
        public string IPAddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string TimeZone { get; set; }
        public string LocalTime { get; set; }

    }
}
