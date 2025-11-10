import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Piloto } from '../piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  private apiURL: string = environment.baseUrl + "pilotos"

  getPilotos(): Observable<Piloto[]>{
    return this.http.get<Piloto[]>(this.apiURL)
  }

  constructor(private http: HttpClient) { }

}
