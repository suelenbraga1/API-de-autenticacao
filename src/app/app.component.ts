import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  login: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private loginService: LoginService, private httpClient: HttpClient)
  {    
  }

  ngOnInit()
  {
  }

  logIn(): void
  {
    this.loginService.validate(this.login, this.senha);

    this.mensagem = this.loginService.atualizarMensagem();
  }
}