import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Piloto } from '../piloto';
import { PageResponse } from '../page-response';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  private apiURL: string = environment.baseUrl + "pilotos";

  constructor(private http: HttpClient) {}

  getPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(this.apiURL);
  }

  getPilotosPaged(page: number, size: number): Observable<PageResponse<Piloto>> {
    return this.http.get<PageResponse<Piloto>>(
      `${this.apiURL}/paged?page=${page}&size=${size}`
    );
  }
}