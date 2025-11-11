import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from './marca.model';
import { environment } from '../../environments/environment'; // ← esta ruta es correcta desde /app/marca

@Injectable({ providedIn: 'root' })
export class MarcaService {
  private readonly baseUrl =
    environment.baseUrl.endsWith('/') ? environment.baseUrl : environment.baseUrl + '/';
  private readonly recurso = 'marcas'; // => /api/marcas

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}${this.recurso}`);
  }

  getMarca(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.baseUrl}${this.recurso}/${id}`);
  }
}

