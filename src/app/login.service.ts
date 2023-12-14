import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mensagem: string = '';

  constructor(private httpClient: HttpClient) 
  {
  }

  validate(login: string, senha: string): void {
    
    if (!login || !senha) {
      this.mensagem = 'Informe login e senha.';
      return;
    }
  
    const url = `http://localhost:5071/api/cliente/isUserRegistered?login=${encodeURIComponent(login)}&senha=${encodeURIComponent(senha)}`;
    
    this.httpClient.get(url).subscribe(
      (data: any) => {
          if (data == true) {
            this.mensagem = 'Login bem-sucedido!';
          }
          else 
          {
            this.mensagem = 'Login falhou. Verifique suas credenciais.';
          }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
        this.mensagem = 'Erro ao conectar ao servidor.';
      }
    );
  }

  atualizarMensagem()
  {
    return this.mensagem;
  }
}