import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Usuario } from '../shared/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeCardService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/clients`);
  }
}
