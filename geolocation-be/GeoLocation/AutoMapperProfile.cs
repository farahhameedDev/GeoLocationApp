using AutoMapper;
using GeoLocationApp.Service.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeoLocationApp
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            this.CreateMap<GeoLocation, GeoLocationOutput>();
        }
    }
}
