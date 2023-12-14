namespace backend
{
    public class ClienteService
    {
        ClienteDao ClienteDao { get; set;}

        public ClienteService(ClienteDao clienteDao)
        {
            this.ClienteDao = clienteDao;
        }

        public bool isUserRegistered(ClienteDto clienteDto)
        {
            IQueryable<Cliente> results = ClienteDao.getCliente(clienteDto);

            if(results.Any())
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}