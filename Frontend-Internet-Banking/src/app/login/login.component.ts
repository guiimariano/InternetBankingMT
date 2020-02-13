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

  estaCarregando = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  login() {
    this.loginService.logar(this.cpf, this.senha)
    .subscribe(response => {
      this.router.navigate(['home']);
<<<<<<< HEAD
      this.estaCarregando = true;
=======
      this.estaCarregando = false;
>>>>>>> 846008d99eb638092a2cd423f6fa0c85e1d2d78d
    }, error => {
      this.estaCarregando = true;
      console.error('NÃO DEU CERTO!! NÃO LOGOU!');
      this.estaCarregando = false;
    });
  }
}