using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")] // /api/''nombre del api''     Endpoint de las clases que hereden esto
    public class BaseApiController : ControllerBase
    {
        
    }
}