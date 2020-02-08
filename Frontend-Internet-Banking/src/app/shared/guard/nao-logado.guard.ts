import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean {
    const usuario = this.authService.getUsuario();

    if (usuario) {
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}
