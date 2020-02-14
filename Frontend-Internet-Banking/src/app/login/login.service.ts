import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';

import { Usuario } from '../shared/interfaces/usuario.interface';
import { AuthService } from '../shared/services/auth.service';
import { userInfo } from 'os';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_MB_URL = environment.API_MB_URL;
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  logar(cpf: string, senha: string): Observable<Usuario> {
    return this.http.post<any>(`${this.API_MB_URL}/users/authenticate`, { cpf, senha })
            .pipe(map(token => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(token));
                this.currentUserSubject.next(user);
                return user;
            }));
  }