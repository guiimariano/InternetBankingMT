import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  API_URL = environment.API_MB_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/clients`);
  }
}
