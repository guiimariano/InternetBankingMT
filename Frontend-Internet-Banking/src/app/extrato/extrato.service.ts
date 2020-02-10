import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Extrato } from '../shared/interfaces/extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getExtrato(): Observable<Extrato[]> {
    return this.http.get<Extrato[]>(`${this.API_URL}/transacoes`);
  }
}
