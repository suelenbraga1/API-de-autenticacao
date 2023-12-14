using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly ClienteService service;

        public ClienteController(ClienteService clienteService)
        {
            this.service = clienteService;
        }

        [HttpGet("isUserRegistered")]
        public bool IsUserRegistered(ClienteDto clienteDto)
        {
            bool resultado = service.isUserRegistered(clienteDto);

            return resultado;
        }
    }
}