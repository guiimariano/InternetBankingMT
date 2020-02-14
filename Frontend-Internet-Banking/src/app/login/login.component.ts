import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  cpf: string;
  senha: string;
  estaCarregando = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  login() {
    this.loginService.logar(this.cpf, this.senha)
    .subscribe(response => {
      this.router.navigate(['home']);
      this.estaCarregando = true;
    }, error => {
      this.estaCarregando = true;
      console.error('NÃO DEU CERTO!! NÃO LOGOU!');
      this.estaCarregando = false;
    });
  }
}