import { Component, OnInit } from '@angular/core';

import { Usuario } from '../shared/interfaces/usuario.interface';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  usuario: Usuario[];
  agencia: string;
  conta: string;
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.agencia = this.authService.getUsuario().agencia;
    this.conta = this.authService.getUsuario().conta;
  }


}
