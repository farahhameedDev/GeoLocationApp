using GeoLocationApp.Service.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GeoLocationApp.Service.IService
{
    public interface IGeoLocationService
    {
        Task<List<GeoLocation>> GetGeoLocationDetails(string[] locations);
    }
}
