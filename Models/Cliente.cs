using System.ComponentModel.DataAnnotations;

public class Cliente
{
    [Key]
    public int Id { get; set; }
    public string? Login { get; set; }
    public string? Senha { get; set; }
}