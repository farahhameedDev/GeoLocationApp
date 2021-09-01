using GeoLocationApp.Service.IService;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using System.Collections.Generic;
using GeoLocationApp.Service.Entity;
using Microsoft.AspNetCore.Cors;

namespace GeoLocationApp.Controllers
{
    [EnableCors("AllowOrigin")]
    [ApiController]
    [Route("[controller]")]
    public class GeoLocationController : ControllerBase
    {
        private readonly ILogger<GeoLocationController> _logger;
        private readonly IGeoLocationService _geoLocationService;
        private readonly IMapper _autoMapper;
        public GeoLocationController(ILogger<GeoLocationController> logger, IGeoLocationService geoLocationService, IMapper autoMapper)
        {
            _logger = logger;
            _geoLocationService = geoLocationService;
            _autoMapper = autoMapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string clientLocation,[FromQuery] string inputLocation)
        {
            string[] locations = new string[] { clientLocation, inputLocation};
            var geoLocationResult = await _geoLocationService.GetGeoLocationDetails(locations);
            return Ok(_autoMapper.Map<List<GeoLocationOutput>>(geoLocationResult));
        }
    }
}
