using backend;

public class ClienteDao
{
    private readonly AppDbContext appDbContext;

    public ClienteDao(AppDbContext _context)
    {
        this.appDbContext = _context;
    }

    public IQueryable<Cliente> getCliente(ClienteDto clienteDto)
    {
        var results = appDbContext.Cliente.Where(x => x.Login == clienteDto.Login && x.Senha == clienteDto.Senha);
            
        return results;
    }
}