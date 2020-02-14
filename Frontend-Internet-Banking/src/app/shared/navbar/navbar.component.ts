import { Component, OnInit } from '@angular/core';

import { Usuario } from '../interfaces/usuario.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario[];
  nome: string;
  agencia: string;
  conta: string;
  saldo: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.nome = this.authService.getUsuario().nome;
    this.agencia = this.authService.getUsuario().agencia;
    this.conta = this.authService.getUsuario().conta;
    this.saldo = this.authService.getUsuario().saldo;
    console.log (this.saldo = this.authService.getUsuario().saldo);

  }
  logout() {
    this.authService.logout();
  }

}
