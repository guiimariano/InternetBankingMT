import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Usuario } from '../shared/interfaces/usuario.interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<Usuario> {
    if (email === 'cpf' && senha === '123') {
      return of({
        nome: 'André',
        email: 'email@teste.com.br',
      }).pipe(
        delay(2000),
        tap(usuario => {
          this.authService.setUsuario(usuario);
        })
      );
    } else {
      const error = throwError('Usuário e senha incorretos');
      return error;
    }
  }
}
