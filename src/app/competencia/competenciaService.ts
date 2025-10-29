import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CompetenciaDetailDTO } from './competenciaDetailDTO';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private apiUrl: string = environment.baseUrl + 'competencias';

  constructor  (private http: HttpClient) {}

  getCompetencias(): Observable<CompetenciaDetailDTO[]> {
    return this.http.get<CompetenciaDetailDTO[]>(this.apiUrl);
  }
}
