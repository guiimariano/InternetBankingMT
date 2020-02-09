import { Injectable } from '@angular/core';

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogado: Usuario;

  constructor() { }

  setUsuario(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioLogado = usuario;
  }

  getUsuario() {
    if (this.usuarioLogado) {
      return this.usuarioLogado;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const parsedUsuarioGuardado = JSON.parse(usuarioGuardado);
      this.usuarioLogado = parsedUsuarioGuardado;
      return parsedUsuarioGuardado;
    }

    return null;
  }

  estaLogado(): boolean {
    return this.getUsuario() ? true : false;
  }
}
